import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: any }>(`${environment.URL}/api/posts`).pipe(
        map(( postData )=>{
          return postData.posts.map((post:any) => {
            return {
              title: post.title,
              content: post.content,
              id: post._id
            };
          });
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.posts = res;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };
    this.http
      .post<{ message: string,postId:string }>(`${environment.URL}/api/posts`, post)
      .subscribe((res: any) => {
        post.id = res.postId;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }

  deletePost(id:string){
    this.http
    .delete<{ message: string }>(`${environment.URL}/api/posts/${id}`, )
    .subscribe((res: any) => {
      this.posts = this.posts.filter(post=> post.id !== id);
      this.postsUpdated.next([...this.posts]);
    });
  }




}
