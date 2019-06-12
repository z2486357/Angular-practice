import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name:'shorten'
})
export class shortenPipe implements PipeTransform{
  transform(value: any,limit:number,plus:string) {
    if (value.length > limit) {
      return value.substr(0, limit) + ' ...' + plus;
    } else {
      return value
    }
  }
}
