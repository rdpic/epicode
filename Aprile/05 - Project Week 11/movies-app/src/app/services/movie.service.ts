import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Genres } from '../models/genres.interface';
import { Movie } from '../models/movie.interface';
import { Favorite } from '../models/favorite.interface';

@Injectable({
	providedIn: 'root'
})
export class MovieService {

	private moviesUrl = environment.srvr;

	constructor(private http: HttpClient) { }

	getAllMovies(): Observable<Movie[]> {
		return this.http.get<Movie[]>(`${this.moviesUrl}movies-popular`);
	}

	getMovieById(id: number): Observable<Movie> {
		const url = `${this.moviesUrl}movies-popular/${id}`;
		return this.http.get<Movie>(url);
	}

	getAllGenres(): Observable<Genres[]> {
		return this.http.get<Genres[]>(`${this.moviesUrl}genres`);
	}

	addFavorite(userId: string, movieId: number): Observable<Favorite> {
		const url = `${this.moviesUrl}favorites`;
		return this.http.post<Favorite>(url, { userId, movieId });
	}

	removeFavorite(favoriteId: number): Observable<any> {
		const url = `${this.moviesUrl}favorites/${favoriteId}`;
		return this.http.delete(url);
	}

	getAllFavorites(userId: string): Observable<Favorite[]> {
		const url = `${this.moviesUrl}favorites?userId=${userId}`;
		return this.http.get<Favorite[]>(url);
	}

}