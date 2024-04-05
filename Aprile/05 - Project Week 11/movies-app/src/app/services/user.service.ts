import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private usersUrl = 'http://localhost:3000/users';

	constructor(private http: HttpClient) { }

	getAllUsers(): Observable<any[]> {
		return this.http.get<any[]>(this.usersUrl);
	}

	getUserById(id: number): Observable<any> {
		return this.http.get<any>(`${this.usersUrl}/${id}`);
	}

	addUser(user: any): Observable<any> {
		return this.http.post<any>(this.usersUrl, user);
	}

	updateUser(id: number, user: any): Observable<any> {
		return this.http.put<any>(`${this.usersUrl}/${id}`, user);
	}
}
