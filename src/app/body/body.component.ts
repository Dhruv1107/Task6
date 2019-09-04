import { Component, OnInit, ViewChild } from "@angular/core";
import { Posts } from "../posts";
import { PostsService } from "../posts.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"]
})
export class BodyComponent implements OnInit {
  posts: Posts[] = [];
  filteredStatus: string = "";
  // @ViewChild("data", { static: false }) data;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      if (params.name === "ALL") {
        this.getData();
      } else {
        this.getSourceDisplay(params.name);
      }
    });
    this.authService
      .returnFilteredStatus()
      .subscribe((filteredStatus: string) => {
        console.log(filteredStatus);
        this.filteredStatus = filteredStatus;
      });
    // this.authService.returnLoggedInStatus().subscribe((status: boolean) => {
    //   console.log(status);
    //   if (status) {
    //     this.data.nativeElement.style.display = "block";
    //   } else {
    //     this.data.nativeElement.style.display = "none";
    //   }
    // });
  }
  // ngAfterViewInit() {
  //   this.data.nativeElement.style.display = "none";
  // }
  getData(): void {
    this.posts = this.postsService.getPosts();
  }
  getSourceDisplay(name: string): void {
    this.posts = this.postsService.getSelectedPost(name);
  }
}
