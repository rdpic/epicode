import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

    user: FormGroup = new FormGroup({
        name: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required]),
    })

    constructor(private authSrv: AuthService, private router: Router) { }

    submitForm(user: FormGroup) {
        try {
            this.authSrv.register(user.value).subscribe(res => console.log(res))
            alert('You have registered!')
            this.router.navigate(['/login']) 
        } catch (error) {
            console.error(error)
        }
    }

}