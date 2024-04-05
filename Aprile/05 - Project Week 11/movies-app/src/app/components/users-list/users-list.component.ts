import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    users: any[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getAllUsers()
            .subscribe(users => this.users = users);
    }
}
