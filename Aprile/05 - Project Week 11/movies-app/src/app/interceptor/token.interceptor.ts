import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	constructor(private authSrv: AuthService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return this.authSrv.loggedStatus.pipe(
			take(1),
			switchMap(user => {
				if (user?.accessToken) {
					const newReq = request.clone({
						headers: request.headers.append('Authorization', `Bearer ${user.accessToken}`)
					})
					return next.handle(newReq)
				} else {
					return next.handle(request)
				}
			})
		);
	}
}
