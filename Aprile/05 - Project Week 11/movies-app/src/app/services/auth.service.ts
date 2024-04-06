import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Auth } from '../models/auth.model';
import { environment } from '../environments/environment';
import { User } from '../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private srvr = environment.srvr;
    private jwtHelper = new JwtHelperService();

    private isLogged$ = new BehaviorSubject<Auth | null>(null);
    currentUser = this.isLogged$.asObservable();
    private timeout!: any;

    constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

    register(cred: { username: string, password: string, email: string }) {
        return this.http.post(`${this.srvr}register`, cred).pipe(tap((res) => {
            console.log(res)
        }))
    }

    login(cred: User) {
        return this.http.post<Auth>(`${this.srvr}login`, cred).pipe(
            tap((res) => {
                console.log(res);
                this.isLogged$.next(res);
                localStorage.setItem('user', JSON.stringify(res));
                this.router.navigate(['/movies-list']);
                this.autoLogout(res);
            }),
            catchError((error) => {
                this.snackBar.open('Login failed: ' + (error.error?.message || 'Unknown error'), 'Close', {
                    duration: 3000,
                });

                return throwError(() => new Error('Login failed'));
            })
        );
    }

    logout() {
        this.isLogged$.next(null);
        localStorage.removeItem('user');
        this.snackBar.open('Logged out!', 'Close', {
            duration: 4000,
        });
        this.router.navigate(['/login'])
    }

    restoreSession() {
        const userJson = localStorage.getItem('user')
        if (!userJson) {
            return
        }
        const user: Auth = JSON.parse(userJson);
        this.isLogged$.next(user);
    }

    private autoLogout(user: Auth) {
        const userExp = this.jwtHelper.getTokenExpirationDate(user.accessToken) as Date;
        const expTime = userExp.getTime() - new Date().getTime();
        this.timeout = setTimeout(() => {
            this.logout();
        }, expTime)
    }

    getCurrentUserId(): string | null {
        const userJson = localStorage.getItem('user');
        console.log('User JSON from localStorage:', userJson);

        if (userJson) {
            const user = JSON.parse(userJson);
            console.log('User ID from parsed JSON:', user.user.id);
            return user.user.id;
        }

        return null;
    }

}
