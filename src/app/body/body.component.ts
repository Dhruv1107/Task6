import { Component, OnInit, Input } from "@angular/core";
import { Posts } from "../posts";
import { PostsService } from "../posts.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"]
})
export class BodyComponent implements OnInit {
  // @Input() filteredData: Posts[];
  posts: Posts[] = [];
  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.getData();
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      if (params.name === "ALL") {
        console.log("in all");
        this.getData();
      } else {
        this.getSourceDisplay(params.name);
      }
    });
  }
  getData(): void {
    this.posts = this.postsService.getPosts();
    console.log(this.posts);
  }
  getSourceDisplay(name): void {
    this.posts = this.postsService.getSelectedPost(name);
  }
  showDetails(index: number): void {
    this.router.navigate(["/popup"]);
  }
}
