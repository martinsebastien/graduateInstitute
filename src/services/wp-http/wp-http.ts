import { Http, RequestOptions, RequestOptionsArgs, Response, RequestMethod, Request } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Widely inspirated by https://gist.github.com/chandermani/9166abe6e6608a31f471

export { Response, RequestOptionsArgs };

@Injectable()
export class WpHttpService {

  private base = 'http://academicadviser.graduateinstitute.ch/wp-json/wp/v2';

  constructor(
    private http: Http,
  ) {}

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Get, url, null, options);
  }

  public post(url: string, body: string | object, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Post, url, body, options);
  }

  public put(url: string, body: string | object, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Put, url, body, options);
  }

  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Delete, url, null, options);
  }

  public patch(url: string, body: string | object, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Patch, url, body, options);
  }

  public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Head, url, null, options);
  }

  private request(method: RequestMethod, url: string, body?: string | object, options?: RequestOptionsArgs): Observable<Response> {
    let requestOptions = new RequestOptions(Object.assign({ method, body, url: this.buildUrl(url) }, options));

    return this.http.request(new Request(requestOptions));

    // TODO: catch some request failures like "no internet connection"
  }

  private buildUrl(endpoint: string): string {
    return this.base + endpoint;
  }

}
