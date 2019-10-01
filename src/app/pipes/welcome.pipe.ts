import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'welcome'
})

export class WelcomePipe implements PipeTransform{
  transform(value: string):string{
    let output="welcome to "+value;
    return output;
  }
}
