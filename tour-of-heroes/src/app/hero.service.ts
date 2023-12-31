import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeros():Observable<Hero[]>{
    const heroes = of(HEROES);
    return heroes
  }
}
