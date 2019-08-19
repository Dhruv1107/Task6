// import { Injectable } from "@angular/core";

import { Posts } from "./posts";
import { POSTSDATA } from "./posts-data";

// @Injectable()
export class PostsService {
  filteredData: Posts[];
  constructor() {}

  getPosts(): Posts[] {
    return POSTSDATA;
  }
  getSelectedPost(name: string): void {
    this.filteredData = POSTSDATA.filter(value => value.heading === name);
  }
  addPost(addPost: Posts): void {
    POSTSDATA.push(addPost);
  }
}
