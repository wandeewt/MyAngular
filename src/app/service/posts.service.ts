import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/dist/types/internal/Observable';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // HttpHeaders
  httpHearders = new HttpHeaders().set('Content-Type','application/json');
  
  private postsUrl: string ='https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
  ) { }

  getPosts(){
    return this.http.get<PostModel[]>(`${this.postsUrl}`)
  }

}
