import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

export const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'active-posts', component: ActivePostsComponent },
    { path: 'inactive-posts', component: InactivePostsComponent },
    { path: 'post/:id', component: PostDetailComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        ActivePostsComponent,
        InactivePostsComponent,
        HomeComponent,
        NavbarComponent,
        PostDetailComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
