import { Component, VERSION } from "@angular/core";
import {DataService} from "./service/data.service";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name:any = "Angular " + VERSION.major;
  className="test";
  test = {
    name: "Testing my string"
    };
  details={
      name:'Pavithra',age:23
    };
  constructor(public dataService:DataService){

  }
  printDetails(){
   this.name=Math.random();
   return this.dataService.count++;
  }
  increasecount(){
    this.dataService.count++;
  }
}
