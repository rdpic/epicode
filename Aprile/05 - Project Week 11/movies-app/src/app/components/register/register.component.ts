import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
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

    constructor(private authSrv: AuthService) { }

    submitForm(form: FormGroup) {
        this.authSrv.register(form.value).subscribe(res => console.log(res))
    }

}