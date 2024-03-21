import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Post } from '../../models/post.interface';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrl: './post-detail.component.scss'
})

export class PostDetailComponent implements OnInit {
    post!: Post;

    constructor(private route: ActivatedRoute) { }

    async ngOnInit() {
        const postId = this.route.snapshot.params['id'];
        console.log('Post ID:', postId);

        try {
            const response = await fetch('/assets/db.json');
            const data = await response.json();
            this.post = data.posts.find((post: Post) => post.id === parseInt(postId, 10));
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    }
}