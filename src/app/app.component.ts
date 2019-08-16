import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "task6";
  public name: string;

  childEventClicked(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
    console.log(this.name);
  }
}
