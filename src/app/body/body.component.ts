import { Component, OnInit } from "@angular/core";
import { Posts } from "../posts";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"]
})
export class BodyComponent implements OnInit {
  posts: Posts[] = [];
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.posts = this.postsService.getPosts();
    console.log(this.posts);
  }
}
