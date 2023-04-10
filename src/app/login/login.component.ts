import { Component } from '@angular/core';
import { User } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hero: User = {
    id: 1,
    name: "Windstorm",
    email: "",
    password: "",
    confirmPassword: ""
  }
}

