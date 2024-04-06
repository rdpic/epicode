import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

	movieId!: number;
	movieDetails!: Movie;

	constructor(private route: ActivatedRoute, private movieService: MovieService) { }

	ngOnInit() {
		this.movieId = this.route.snapshot.params['id'];
		this.movieService.getMovieById(this.movieId).subscribe({
			next: (movie) => this.movieDetails = movie,
			error: (error) => console.error(error)
		});
	}

}
