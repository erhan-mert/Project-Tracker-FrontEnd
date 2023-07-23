import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isLoggedIn: boolean = false;
  returnUrl: string;
  token: string | null= "";

  validateUser(username:string, password:string):void {
    if(username == 'admin' && password == 'admin') {
      this.isLoggedIn = true;
      this.token = "asdasda-asdasd-asdasd-asdasd";
      localStorage.setItem('jwt',this.token);
    }
  }

  getTokenFromStorage() {
    this.token = localStorage.getItem('jwt');
  }
}
