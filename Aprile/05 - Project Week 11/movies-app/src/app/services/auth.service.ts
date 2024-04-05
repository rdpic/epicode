import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Auth, LoginData, SignUp } from '../models/auth.model';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLogged$ = new BehaviorSubject<boolean>(this.hasToken());
    loggedStatus = this.isLogged$.asObservable();

    constructor(private http: HttpClient, private router: Router, private jwtSrv: JwtHelperService) { }

    login(cred: Auth): Observable<LoginData> {
        return this.http.get<any[]>(`${environment.srvr}users?email=${cred.email}&password=${cred.password}`).pipe(
            map(users => {
                const user = users[0];
                if (user) {
                    const mockToken = 'mockedJWTToken';
                    localStorage.setItem("user", JSON.stringify({ user, accessToken: mockToken }));
                    this.isLogged$.next(true);
                    alert("Logged in!");
                    this.router.navigate(['/movies-list']);
                    return { user, accessToken: mockToken };
                } else {
                    alert("Login failed.");
                    throw new Error("Login failed.");
                }
            }),
            catchError(error => {
                console.error("Login error: ", error);
                return throwError(() => new Error('Login failed due to error: ' + error.message));
            })
        );
    }

    /* login(cred: Auth): Observable<LoginData> {
        return this.http.post<any>(`${environment.srvr}users`, cred).pipe(
            tap((res) => {
                console.log("Received response: ", res); // Check the whole response structure
                const token = res.accessToken; // Adjust according to the actual path
                if (token && this.isJwt(token)) {
                    localStorage.setItem("user", JSON.stringify({ ...res, accessToken: token }));
                    this.isLogged$.next(true);
                    this.router.navigate(['/']); // Adjust navigation as needed
                } else {
                    throw new Error("Invalid token received.");
                }
            }),
            catchError(error => {
                console.error("Login error: ", error);
                return throwError(() => new Error('Login failed due to error: ' + error.message));
            })
        );
    } */

    logout() {
        localStorage.removeItem("user")
        this.isLogged$.next(false)
        this.router.navigate(['/login'])
    }

    register(formData: SignUp) {
        return this.http.post(`${environment.srvr}users`, formData).pipe(tap((res) => {
            console.log(res)
        }))
    }

    currentLoggedUser(): Observable<SignUp[]> | undefined {
        const data = this.getLoginData;

        if (data) {
            const email = data.user.email
            return this.http.get<SignUp[]>(`${environment.srvr}users?email=${email}`)
        } else {
            this.isLogged$.next(false)
            return
        }
    }

    private isJwt(token: string): boolean {
        return token.split('.').length === 3;
    }

    private hasToken(): boolean {
        const token = this.getLoginData?.accessToken;
        if (!token) {
            return false;
        }
        try {
            const isExpired = this.jwtSrv.isTokenExpired(token);
            return !isExpired;
        } catch (error) {
            console.error("Error checking token expiration: ", error);
            return false;
        }
    }

    private get getLoginData(): LoginData | null {
        const ls = JSON.parse(localStorage.getItem("user")!) as LoginData | null;
        return ls ? ls : null;
    }

    verifyLogin() {
        const data = this.getLoginData;
        if (data) {
            const isExpired = this.jwtSrv.isTokenExpired(data.accessToken)
            this.isLogged$.next(!isExpired)
        } else {
            this.isLogged$.next(false)
        }
    }
}
