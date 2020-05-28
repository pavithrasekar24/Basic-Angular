import { Component, VERSION } from "@angular/core";
import { DataService } from "./service/data.service";
@Component({ 
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: any = "Angular " + VERSION.major;
  className = "test<script></script>";
  test = {
    name: "Testing my string"
  };
  details = {
    name: "Pavithra",
    age: 23
  };
  user = null;
  user1 = [
    { name: "abc", age: "23" },
    { name: "xyz", age: "24" },
    { name: "lkm", age: "25" }
  ];
  user2 = [
    { name: "xyz", age: "24" },
    { name: "abc", age: "23" },
    { name: "lkm", age: "25" }
  ];
  constructor(public dataService: DataService) {
    this.user = this.user1;
  }
  printDetails() {
    this.name = Math.random();
    return this.dataService.count++;
  }
  increasecount() {
    this.dataService.count++;
  }
  order() {
    console.log("orderclicking...");
    this.user =
      this.user[0].name == this.user1[0].name ? this.user2 : this.user1;
  }
  print(event) {
    console.log("evnet", event.target.value);
    this.name = event.target.value;
  }
}
