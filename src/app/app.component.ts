import { Component } from "@angular/core";
import { Posts } from "./posts";
import { PostsService } from "./posts.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "task6";
  public name: string;
  constructor(private postsService: PostsService, private router: Router) {}
  headingChanged(event: Event): void {
    this.name = (<HTMLInputElement>event.currentTarget).value;
    this.postsService.getSelectedPost(this.name);
    this.router.navigate(["/", this.name]);
  }
}
