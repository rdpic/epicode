import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FavoritesService {
    private favoritesKey = 'favorites';

    constructor() { }

    addFavorite(movieId: number): void {
        const favorites = this.getFavorites();
        if (!favorites.includes(movieId)) {
            favorites.push(movieId);
            localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
        }
    }

    removeFavorite(movieId: number): void {
        let favorites = this.getFavorites();
        favorites = favorites.filter(id => id !== movieId);
        localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }

    isFavorite(movieId: number): boolean {
        const favorites = this.getFavorites();
        return favorites.includes(movieId);
    }

    private getFavorites(): number[] {
        const favorites = localStorage.getItem(this.favoritesKey);
        return favorites ? JSON.parse(favorites) : [];
    }
}