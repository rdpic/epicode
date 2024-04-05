import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
	{
		path: "",
		component: LoginComponent
	}
]

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(routes)
	]
})

export class LoginModule { }
