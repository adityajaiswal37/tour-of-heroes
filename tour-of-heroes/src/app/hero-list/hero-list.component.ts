import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes:Hero[] = [];

  selectedHero?:Hero

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService, private messageService:MessageService){

  }

  getHeroes():void{
    this.heroService.getHeros()
                .subscribe(x => {
                  console.log(x);
                  this.heroes = x;    
                })
  }
  onSelect(hero:Hero):void{
    this.messageService.add(`You selected Hero with id ${hero.id}`)
    console.log(hero)
    this.selectedHero = hero;
  }

}
