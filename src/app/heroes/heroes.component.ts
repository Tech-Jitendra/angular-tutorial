import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  // hero = "Windstorm"
  hero: Hero = {
    id: 1,
    name: "Windstorm",
    email: "",
    password: "",
    confirmPassword: ""
  }
}
