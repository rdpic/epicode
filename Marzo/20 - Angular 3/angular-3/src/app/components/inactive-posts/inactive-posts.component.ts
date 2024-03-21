import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.interface';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrl: './inactive-posts.component.scss'
})

export class InactivePostsComponent implements OnInit {
    posts: Post[] = [];

    async ngOnInit() {
        try {
            const response = await fetch('/assets/db.json');
            const data = await response.json();
            this.posts = data.posts.filter((post: Post) => !post.active);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }
}