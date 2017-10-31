import { Component } from '@angular/core';

import { CookieService } from './lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cookieService : CookieService){ }

  add(){
    this.cookieService.set("", "");
  }

  get(){
    this.cookieService.get("");
  }

  getAll(){ 
    this.cookieService.getAll();
  }

  delete(){
    this.cookieService.delete("");
  }

  deleteAll(){
    this.cookieService.deleteAll();
  }

  check(){
    this.cookieService.check(""); 
  }
}
