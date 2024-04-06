import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { environment } from 'src/app/environments/environment';
import { Movie } from 'src/app/models/movie.interface';
import { Genres } from 'src/app/models/genres.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Favorite } from 'src/app/models/favorite.interface';

@Component({
	selector: 'app-movies-list',
	templateUrl: './movies-list.component.html',
	styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
	movies: Movie[] = [];
	genres: Genres[] = [];
	favorites: Favorite[] = [];
	favoriteMoviesIds: Set<number> = new Set<number>();
	imgApi: string = environment.imgApi;

	constructor(
		private movieService: MovieService,
		private authService: AuthService
	) { }

	ngOnInit() {
		this.getMovies();
		this.loadUserFavorites();
	}

	getMovies(): void {
		this.movieService.getAllMovies()
			.subscribe({
				next: (movies) => {
					this.movies = movies;
				},
				error: (error) => {
					console.error('Error fetching movies:', error);
				}
			});
	}

	getGenres(): void {
		this.movieService.getAllGenres().subscribe({
			next: (genres) => {
				this.genres = genres;
			},
			error: (error) => {
				console.error('Error fetching genres:', error);
			}
		});
	}

	loadUserFavorites(): void {
		const userId = this.authService.getCurrentUserId();
		if (userId) {
			this.movieService.getAllFavorites(userId).subscribe({
				next: (fetchedFavorites) => {
					this.favorites = fetchedFavorites;
				},
				error: (error) => console.error('Error loading favorites', error),
			});
		}
	}

	addFavorite(movieId: number): void {
		const userId = this.authService.getCurrentUserId();
		if (userId) {
			this.movieService.addFavorite(userId, movieId).subscribe({
				next: (favorite) => {
					this.favorites.push(favorite);
					console.log('Favorite added:', movieId);
				},
				error: (error) => console.error('Error adding favorite', error),
			});
		}
	}

	removeFavorite(movieId: number): void {
		const favorite = this.getFavorite(movieId);
		if (favorite) {
			this.movieService.removeFavorite(favorite.id).subscribe({
				next: () => {
					this.favorites = this.favorites.filter(f => f.movieId !== movieId);
					console.log('Favorite removed:', movieId);
				},
				error: (error) => console.error('Error removing favorite', error),
			});
		}
	}

	toggleFavorite(movieId: number): void {
		console.log(`Toggling favorite for movie ID: ${movieId}`);

		if (this.isFavorite(movieId)) {
			console.log(`Movie ID ${movieId} is currently a favorite. Removing...`);
			const favorite = this.getFavorite(movieId);
			if (favorite) {
				this.movieService.removeFavorite(favorite.id).subscribe({
					next: () => {
						this.favoriteMoviesIds.delete(movieId);
						console.log(`Favorite removed: ${movieId}`);
						this.loadUserFavorites();
					},
					error: (error) => {
						console.error('Error removing favorite', error);
					},
				});
			}
		} else {
			console.log(`Movie ID ${movieId} is not a favorite. Adding...`);
			const userId = this.authService.getCurrentUserId();
			if (userId) {
				this.movieService.addFavorite(userId, movieId).subscribe({
					next: () => {
						console.log(`Favorite added: ${movieId}`);
						this.loadUserFavorites();
					},
					error: (error) => {
						console.error('Error adding favorite', error);
					},
				});
			} else {
				console.error('User ID is null, cannot add favorite');
			}
		}
	}

	isFavorite(movieId: number): boolean {
		return this.favorites.some(f => f.movieId === movieId);
	}

	getFavorite(movieId: number): Favorite | undefined {
		return this.favorites.find(f => f.movieId === movieId);
	}

	getFavoriteId(movieId: number): number | undefined {
		const favorite = this.favorites.find(f => f.movieId === movieId);
		return favorite ? favorite.id : undefined;
	}
}
