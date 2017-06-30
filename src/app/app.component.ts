import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http:Http){}

  ngOnInit(){
    /*this.http.get('/api/user/list').map(res => res.json()).subscribe(v => console.log(v));*/
  }

}
