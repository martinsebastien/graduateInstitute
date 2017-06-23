import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs';

import { CommentsProvider } from '../../providers/comments/comments';
import { Post } from '../../models/post';
import { Comment } from '../../models/comment';

@Component({
  selector: 'gi-new-comment',
  templateUrl: 'new-comment.html'
})
export class NewCommentComponent {

  @Input() post: Post;
  @Input() refresh$: BehaviorSubject<void>;
  newCommentForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public commentsProvider: CommentsProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
  ) {
    this.newCommentForm = this.fb.group({
      name: [null, [
        Validators.required,
        Validators.minLength(3),
      ]],
      email: [null, [
        Validators.email,
        Validators.required,
      ]],
      content: [null, [
        Validators.required,
        Validators.minLength(5),
      ]],
    });
  }

  newComment(e) {
    e.preventDefault();

    // Get data
    const { name, email, content } = this.newCommentForm.value;
    const commentData = {
      content,
      author_email: email,
      author_name: name,
      post: this.post.id,
    };

    // Loading
    const loading = this.loadingCtrl.create({
      content: 'Comment validation is in progress',
    });
    loading.present();

    // Process
    this.commentsProvider.create(commentData)
      .finally(() => loading.dismiss())
      .subscribe(
        comment => this.newCommentCreated(comment),
        err => this.newCommentErrors(err),
      );

  }

  newCommentErrors(err) {
    let { message, code } = err.json();

    switch(code) {
      case 'rest_invalid_param':
        message = 'Your email address is invalid';
      break;
      case 'comment_duplicate':
        message = 'It looks like a comment that you already posted';
      break;
    }

    const toast = this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'top',
      showCloseButton: true,
    });

    toast.present();

  }

  newCommentCreated(comment: Comment) {

    const toast = this.toastCtrl.create({
      duration: 3000,
      position: 'middle',
      showCloseButton: true,
    });

    if (comment.status == 'approved') {
      this.refresh$.next(null);
      toast
        .setMessage('Your message is public')
        .present();
    } else if (comment.status == 'hold') {
      toast
        .setMessage('Your message have to be verified by an administrator')
        .present();
    }

    this.newCommentForm.reset();

  }

}
