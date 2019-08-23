import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: [ './body.component.css' ]
})
export class BodyComponent implements OnInit {
	posts: Posts[] = [];
	constructor(private postsService: PostsService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		// this.getData();
		this.route.params.subscribe((params: Params) => {
			console.log(params);
			if (params.name === 'ALL') {
				this.getData();
			} else {
				this.getSourceDisplay(params.name);
			}
		});
	}
	getData(): void {
		this.posts = this.postsService.getPosts();
	}
	getSourceDisplay(name): void {
		this.posts = this.postsService.getSelectedPost(name);
	}
	showPopup(post: Posts) {
		this.postsService.showPopup(post);
	}
}
