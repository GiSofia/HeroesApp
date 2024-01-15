import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {


  transform(hero: Hero): string {
    if(!hero.id && !hero.alter_img){
      return 'assets/no-image.png';
    }

    if(hero.alter_img) return hero.alter_img;

    return `assets/heroes/${hero.id}.jpg`
  }

}
