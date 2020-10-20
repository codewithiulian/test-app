import { isPromise } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  private PREPOSITIONS = ["of", "the"];

  transform(value: string): string {
    if(!value) { return null; }

    let words = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      let word = words[i];
      if(i > 0 && this.isPreposition(word)){
        words[i] = word.toLowerCase();
      }else{
        words[i] = this.toTitleCase(word);
      }
    }

    return words.join(' ');
  }

  toTitleCase(word: string): string{
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }

  isPreposition(word: string): boolean{
    return this.PREPOSITIONS.includes(word.toLowerCase());
  }

}
