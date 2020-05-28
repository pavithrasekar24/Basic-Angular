import { Component, Input } from '@angular/core';
import {DataService} from "./service/data.service";
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}My count{{dataService.count}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent  {
  @Input() name: string;
  constructor(public dataService : DataService){

  }
//  increasecount(){
//     this.dataService.count+2;
//   }
}
