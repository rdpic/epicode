import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesGuard } from './components/favorites/favorites.guard';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListGuard } from './components/movies-list/movies-list.guard';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListGuard } from './components/users-list/users-list.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
	{ path: '', redirectTo: '/register', pathMatch: 'full' },
	{ path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
	{ path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
	{ path: 'favorites', component: FavoritesComponent, canActivate: [FavoritesGuard] },
	{ path: 'movies-list', component: MoviesListComponent, canActivate: [MoviesListGuard] },
	{ path: 'users-list', component: UsersListComponent, canActivate: [UsersListGuard] },
	{ path: 'movie-details/:id', component: MovieDetailsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }