import { Component } from "@angular/core";
import { Posts } from "./posts";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "task6";
  public name: string;
  public filteredData: Posts[];
  constructor(private postsService: PostsService) {}
  childEventClicked(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
    this.filteredData = this.postsService.getSelectedPost(this.name);
    console.log(this.name);
    console.log(this.filteredData);
  }
}
