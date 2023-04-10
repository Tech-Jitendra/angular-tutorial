import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  selectedHero?: any;
  heroes = [
    { id: 1, name: "jitendra", },
    { id: 2, name: "react", },
    { id: 3, name: "next", },
    { id: 4, name: "angular", },
    { id: 5, name: "learning", },
    { id: 6, name: "with", },
    { id: 7, name: "Windstorm", }
  ]

  handleData = (hero: any) => {
    this.selectedHero = hero.name
    console.log("this is working", hero)
  }
}
