import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { Auth } from '../../models/auth.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
    isLoggedIn: boolean = false;
    private authSubscription!: Subscription;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.restoreSession();

        this.authSubscription = this.authService.currentUser.subscribe(
            (auth: Auth | null) => {
                this.isLoggedIn = !!auth;
            }
        );
    }

    logout(): void {
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.authSubscription.unsubscribe();
    }
}