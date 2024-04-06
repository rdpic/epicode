import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	email: string = '';
    password: string = '';

	constructor(private authSrv: AuthService, private snackBar: MatSnackBar, private router: Router) { }

	submitLogin(form: NgForm) {
		if (form.valid) {
			this.authSrv.login({ email: this.email, password: this.password }).subscribe({
				next: (res) => {
					console.log('Login success:', res);
					this.snackBar.open('You have logged in! ', 'Close', {
						duration: 4000,
					});
					this.router.navigate(['/movies-list']);
				},
				error: (err) => {
					console.error('Login error:', err);
					this.snackBar.open('Login failed: ' + (err.error?.message || 'Unknown error'), 'Close', {
						duration: 4000,
					});
				}
			});
		}
	}

}
