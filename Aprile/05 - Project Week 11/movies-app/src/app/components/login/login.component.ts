import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	email!: string
	password!: string

	constructor(private authSrv: AuthService) { }

	submitLogin(form: NgForm) {
		// Assuming form.value directly contains email and password
		this.authSrv.login({email: this.email, password: this.password}).subscribe(res => console.log(res));
	}

}
