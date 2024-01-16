import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit{

  public heroForm = new FormGroup({
    id:               new FormControl<string>(''),
    superhero:        new FormControl<string>('', {nonNullable: true}),
    publisher:        new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alter_img:        new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  get currentHero(): Hero{
    const hero = this.heroForm.value as Hero;

    return hero;
  }

  constructor(private heroesService: HeroesService, private activeRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;

    this.activeRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroeById(id))
    ).subscribe( hero => {
      if(!hero) return this.router.navigateByUrl('/');

      this.heroForm.reset(hero);
      return;
    });
  }

  onSubmit(): void{

    console.log('Entro a onSubmit')

    if(this.heroForm.invalid) return;

    if(this.currentHero.id){
      this.heroesService.updateHero(this.currentHero)
      .subscribe(hero => {
        // Mostrar snackbar
      });

      return;
    }

    this.heroesService.addHero(this.currentHero)
    .subscribe(hero =>{
      // Mostrar snackbar y navegar /heroes/edit/heroe.id
    })
  }

}
