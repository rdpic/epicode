import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isLoggedIn: boolean = false;
    private authSubscription!: Subscription;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        // Subscribe to the authentication status observable
        this.authSubscription = this.authService.loggedStatus.subscribe(
            (loggedInStatus: boolean) => {
                this.isLoggedIn = loggedInStatus;
            }
        );
    }

    logout(): void {
        this.authService.logout();
    }

    ngOnDestroy(): void {
        // Unsubscribe to avoid memory leaks
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
    }
}
