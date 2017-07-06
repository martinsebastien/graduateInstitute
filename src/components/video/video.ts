import { Component, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import getYoutubeId from 'get-youtube-id';

@Component({
  selector: 'gi-video',
  templateUrl: 'video.html'
})
export class VideoComponent {

  public videoUrl: SafeResourceUrl;

  constructor(
    public domSanitizer: DomSanitizer,
  ) {}

  @Input()
  public set url(val: string) {
    const id = getYoutubeId(val);
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}?modestbranding=1&autohide=1&showinfo=0`);
  }

}
