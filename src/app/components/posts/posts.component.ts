import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  post: any;

  comments: any[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/comments?_limit=10')
      .subscribe(dataComment => this.comments = dataComment)
    ;

  }


  ngOnInit(): void {
  }

}
