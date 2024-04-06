import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FavoritesGuard implements CanActivate {

    constructor(private authSrv: AuthService, private router: Router) {}

    async canActivate(): Promise<boolean> {
        const isLogged = await firstValueFrom(this.authSrv.currentUser);
        if (!isLogged) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}