import { Injectable } from "@angular/core";

import { Posts } from "./posts";
import { POSTSDATA } from "./posts-data";

@Injectable()
export class PostsService {
  constructor() {}

  getPosts(): Posts[] {
    return POSTSDATA;
  }
}
