import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.interface';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrl: './active-posts.component.scss'
})

export class ActivePostsComponent implements OnInit {
    posts: Post[] = [];

    async ngOnInit() {
        try {
            const response = await fetch('/assets/db.json');
            const data = await response.json();
            this.posts = data.posts.filter((post: Post) => post.active);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }
}
