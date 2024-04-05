import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
	{
		path: "",
		component: RegisterComponent
	}
]

@NgModule({
	declarations: [
		RegisterComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	]
})
export class RegisterModule { }
