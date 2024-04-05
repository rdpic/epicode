import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
    favorites: any[] = [];
    userId: number | null = null;

    constructor(
        private movieService: MovieService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.authService.loggedStatus.subscribe((isLoggedIn) => {
            if (isLoggedIn) {
                const loginData = this.getLoginData();
                if (loginData) {
                    this.userId = loginData.user.id;
                    this.getFavorites();
                }
            } else {
                this.userId = null;
            }
        });
    }

    private getLoginData() {
        const userJson = localStorage.getItem('user');
        return userJson ? JSON.parse(userJson) : null;
    }

    getFavorites(): void {
        if (this.userId) {
            this.movieService.getAllFavorites(this.userId)
                .subscribe(favorites => this.favorites = favorites);
        }
    }

    toggleFavorite(movieId: number): void {
        if (!this.userId) return;

        const existingFavorite = this.favorites.find(f => f.movieId === movieId);
        if (existingFavorite) {
            this.movieService.removeFavorite(existingFavorite.id).subscribe(() => {
                this.getFavorites();
            });
        } else {
            this.movieService.addFavorite(movieId, this.userId).subscribe(() => {
                this.getFavorites();
            });
        }
    }

    isFavorite(movieId: number): boolean {
        return this.favorites.some(f => f.movieId === movieId);
    }
}