import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  @Input() hero?:Hero;
  
  ngOnInit(): void {
    
  }
  constructor(){}


}
