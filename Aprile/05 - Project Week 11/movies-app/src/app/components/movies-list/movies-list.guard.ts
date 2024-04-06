import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class MoviesListGuard implements CanActivate {
    
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