import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cicdTestProject';
   book: any = { };

  constructor(http: HttpClient) {
    http.get('https://api.angular.schule/book/9783864906466')
      .subscribe(b => this.book = b);
  }
}
