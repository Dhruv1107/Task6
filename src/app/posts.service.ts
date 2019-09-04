import { Injectable } from "@angular/core";

import { Posts } from "./posts";
import { POSTSDATA } from "./posts-data";
@Injectable({
  providedIn: "root"
})
export class PostsService {
  popup: Posts[];
  filteredData: Posts[];

  getPosts(): Posts[] {
    return POSTSDATA;
  }
  getSelectedPost(name: string): Posts[] {
    return POSTSDATA.filter(post => post.heading === name);
  }
  addPost(addPost: Posts): void {
    POSTSDATA.push(addPost);
  }
  addPopUp(id: number): Posts[] {
    return POSTSDATA.filter(post => post.id == id);
  }
}
