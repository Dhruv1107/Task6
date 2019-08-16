import { Injectable } from "@angular/core";

import { Posts } from "./posts";
import { POSTSDATA } from "./posts-data";

@Injectable()
export class PostsService {
  constructor() {}

  getPosts(): Posts[] {
    return POSTSDATA;
  }
  getSelectedPost(name: string): Posts[] {
    return POSTSDATA.filter(value => value.heading === name);
  }
}
