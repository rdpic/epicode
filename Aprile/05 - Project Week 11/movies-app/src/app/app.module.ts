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
import { GenresFilterPipe } from './pipes/genresFilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

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
		GenresFilterPipe,
  MovieDetailsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		MatSnackBarModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: tokenGetter,
				allowedDomains: ["localhost:3000", "localhost:4200", "localhost:4201"],
				disallowedRoutes: [""],
			},
		}),
  BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
