import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  styleUrls: ['./heroe-page.component.css']
})
export class HeroePageComponent implements OnInit{

  public hero?: Hero

  constructor(private heroesService: HeroesService, private activedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroeById(id)),
    ).subscribe(hero =>{
      if(!hero) return this.router.navigate(['/heroes/list']);
      this.hero = hero;
      //console.log({hero});
      return;
    })
  }


  goBack(): void{
    this.router.navigateByUrl('heroes/list');
  }
}
