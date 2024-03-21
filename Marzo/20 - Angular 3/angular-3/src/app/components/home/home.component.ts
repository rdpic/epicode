import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    posts: Post[] = [];
    featuredPost!: Post;
    randomPosts: Post[] = [];

    async ngOnInit() {
        try {
            const response = await fetch('/assets/db.json');
            const data = await response.json();
            this.posts = data.posts.filter((post: Post) => post.active);
            this.featuredPost = this.posts[0];
            this.randomPosts = this.shuffleArray([...this.posts]).slice(0, 4);
        } catch (error) {
            console.error('There was an error loading the posts:', error);
        }
    }

    shuffleArray(array: Post[]): Post[] {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
}