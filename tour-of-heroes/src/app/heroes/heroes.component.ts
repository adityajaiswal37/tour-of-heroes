import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes:Hero[] = [
    {name:'Iron Man',id:1},
    {name:'Hulk',id:2},
    {name:'Thor',id:3},
    {name:'Black Widow',id:4},
    {name:'Hawkeye',id:5},
    {name:'Captain',id:6},
    {name:'Spiderman',id:7}
]
  ngOnInit(): void {
    
  }
  constructor(){}


}
