import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(){}

  hero: Hero = {name:'Iron Man',id:1}

}
