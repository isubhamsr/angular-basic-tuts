import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contryCode',
  standalone: true
})
export class ContryCodePipe implements PipeTransform {

  transform(value: Number, country?:String): String {
    if(country === "USA"){
      return "+1-" + value;
    }
    return "+91-" + value;
  }

}
