import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private usersUrl = 'http://localhost:4201/users';

	constructor(private http: HttpClient) { }

	getAllUsers(): Observable<User[]> {
		return this.http.get<User[]>(this.usersUrl);
	}

	getUserById(id: number): Observable<User> {
		return this.http.get<User>(`${this.usersUrl}/${id}`);
	}

	addUser(user: User): Observable<User> {
		return this.http.post<any>(this.usersUrl, user);
	}

	updateUser(id: number, user: User): Observable<User> {
		return this.http.put<any>(`${this.usersUrl}/${id}`, user);
	}
}
