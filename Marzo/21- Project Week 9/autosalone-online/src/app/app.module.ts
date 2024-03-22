import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrandPageComponent } from './components/brand-page/brand-page.component';

export const appRoutes = [
    { path: '', component: HomePageComponent },
    { path: 'brand/:brand', component: BrandPageComponent }
];

@NgModule({
    declarations: [
        HomePageComponent,
        BrandPageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }