import { Component, OnInit } from "@angular/core";
import { Posts } from "../posts";
import { PostsService } from "../posts.service";
import { FormControl, Validators, FormGroup } from "@angular/forms";
@Component({
  selector: "app-addform",
  templateUrl: "./addform.component.html",
  styleUrls: ["./addform.component.css"]
})
export class AddformComponent implements OnInit {
  constructor(public postsService: PostsService) {}

  ngOnInit() {}

  profileForm = new FormGroup({
    heading: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
    content: new FormControl("", Validators.required),
    popup: new FormControl("", Validators.required)
  });

  onSubmit(): void {
    console.log(this.profileForm.value);
    this.postsService.addPost(this.profileForm.value);
  }
}
