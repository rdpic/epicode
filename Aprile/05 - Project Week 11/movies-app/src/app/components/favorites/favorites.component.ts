import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { MovieService } from '../../services/movie.service';
import { Movie } from 'src/app/models/movie.interface';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
    favorites: Movie[] = [];

    constructor(
        private authService: AuthService,
        private movieService: MovieService
    ) { }

    ngOnInit() {
        this.authService.currentUser.subscribe((auth) => {
            if (auth && auth.user) {
                this.loadUserFavorites(auth.user.id);
            }
        });
    }

    loadUserFavorites(userId: string): void {
        this.movieService.getAllFavorites(userId).subscribe(favorites => {
            const requests = favorites.map(fav => 
                this.movieService.getMovieById(fav.movieId).pipe(
                    catchError(error => {
                        console.error(`Error fetching movie details for ID ${fav.movieId}: ${error}`);
                        return of(null);
                    })
                )
            );
            forkJoin(requests).subscribe(results => {
                this.favorites = results.filter(result => result !== null) as Movie[];
            });
        });
    }
}