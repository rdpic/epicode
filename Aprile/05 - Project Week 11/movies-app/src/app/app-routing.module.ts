import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './components/login/login.guard';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesGuard } from './components/favorites/favorites.guard';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListGuard } from './components/movies-list/movies-list.guard';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListGuard } from './components/users-list/users-list.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
	{ path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
	{ path: 'favorites', component: FavoritesComponent, canActivate: [FavoritesGuard] },
	{ path: 'movies-list', component: MoviesListComponent, canActivate: [MoviesListGuard] },
	{ path: 'users-list', component: UsersListComponent, canActivate: [UsersListGuard] },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }