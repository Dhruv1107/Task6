import { Component, OnInit, ViewChild } from '@angular/core';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: [ './body.component.css' ]
})
export class BodyComponent implements OnInit {
	posts: Posts[] = [];
	filteredStatus: string = '';
	constructor(private postsService: PostsService, private route: ActivatedRoute, private authService: AuthService) {}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			console.log(params);
			if (params.name === 'ALL') {
				this.getData();
			} else {
				this.getSourceDisplay(params.name);
			}
		});
		this.authService.returnFilteredStatus().subscribe((filteredStatus: string) => {
			console.log(filteredStatus);
			this.filteredStatus = filteredStatus;
		});
	}
	getData(): void {
		this.posts = this.postsService.getPosts();
	}
	getSourceDisplay(name): void {
		this.posts = this.postsService.getSelectedPost(name);
	}
}
