import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  @Output() eventClicked = new EventEmitter<Event>();

  changeHeading = (event: Event) => {
    this.eventClicked.emit(event);
  };
}
