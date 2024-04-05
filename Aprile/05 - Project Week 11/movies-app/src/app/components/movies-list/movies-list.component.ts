import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { environment } from 'src/app/environments/environment';

@Component({
	selector: 'app-movies-list',
	templateUrl: './movies-list.component.html',
	styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
	movies: any[] = [];

	constructor(private movieService: MovieService) { }

	ngOnInit() {
		this.getMovies();
	}

	getMovies(): void {
		this.movieService.getAllMovies()
			.subscribe(movies => this.movies = movies);
	}

	getPosterUrl(posterPath: string): string {
		// Assuming you have the base URL for images
		// For example, if images are also served from localhost:3000
		return `http://localhost:3000${posterPath}`;
	}

}
