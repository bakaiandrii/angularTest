import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';

@Component({
  selector: 'app-root',
  template: '<h1>hello</h1>' +
    '<app-user *ngFor="let u of users" [user] = "u"></app-user>' +
    '<hr/>' +
    '<app-posts *ngFor="let p of posts" [post]="p"></app-posts>'
  ,
  styles: ['h1 {background: silver}']
})
export class AppComponent {
  title = 'angularTest';

  // private httpClient: HttpClient;
  // constructor(http: HttpClient) {
  //   this.httpClient = http;
  // }
  users: User[];
  posts: any[];


  //depandency injection
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users = data)
    ;
    this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .subscribe(dataPosts => this.posts = dataPosts)
    ;


  }
}
