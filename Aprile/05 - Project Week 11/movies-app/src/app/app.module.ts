import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

export function tokenGetter() {
	return localStorage.getItem("access_token");
}

@NgModule({
	declarations: [
		AppComponent,
  		MoviesListComponent,
		UsersListComponent,
		FavoritesComponent,
  		NavbarComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: tokenGetter,
				allowedDomains: ["localhost:3000", "localhost:4200"],
				disallowedRoutes: [""],
			},
		}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
