import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-interceptor';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const postData = { title: 'Angular POST Request Example' };
    this.http.post<any>('https://jsonplaceholder.typicode.com/posts', postData).subscribe(data => {
      console.log(data);
    })
  }
}
