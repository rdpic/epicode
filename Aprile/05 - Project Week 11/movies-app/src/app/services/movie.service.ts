import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MovieService {

	private moviesUrl = 'http://localhost:3000/movies-popular';

	constructor(private http: HttpClient) { }

	getAllMovies(): Observable<any[]> {
		return this.http.get<any[]>(this.moviesUrl);
	}

	getMovieById(id: number): Observable<any> {
		const url = `${this.moviesUrl}/${id}`;
		return this.http.get<any>(url);
	}

	addFavorite(userId: number, movieId: number): Observable<any> {
		return this.http.post('http://localhost:3000/favorites', { userId, movieId });
	}
	  
	removeFavorite(favoriteId: number): Observable<any> {
		const url = `http://localhost:3000/favorites/${favoriteId}`;
		return this.http.delete(url);
	}

	getAllFavorites(userId: number): Observable<any[]> {
		return this.http.get<any[]>(`http://localhost:3000/favorites?userId=${userId}`);
	}

}