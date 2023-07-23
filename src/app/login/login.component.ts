import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {
  }

  userName: string;
  password: string;

  loginUser() {
    this.userService.validateUser(this.userName, this.password);
    console.log(this.userService.isLoggedIn);
    console.log(this.userService.returnUrl);
    if (this.userService.isLoggedIn) {
      console.log('navigate');

      this.router.navigate([this.userService.returnUrl]);
    }
  }

}
