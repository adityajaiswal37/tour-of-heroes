import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent {
  heroes = HEROES;

  selectedHero?:Hero
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

}
