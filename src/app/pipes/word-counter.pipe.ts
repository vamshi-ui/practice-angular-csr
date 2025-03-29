import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCounter',
})
export class WordCounterPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): number {
    let count = 0;
    args[0] == 'words' ? (count = value.split(' ').length) : (count = value.split('').length);
    return count;
  }
}
