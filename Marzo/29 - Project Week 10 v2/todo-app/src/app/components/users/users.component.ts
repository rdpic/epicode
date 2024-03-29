import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';
import { User } from '../../models/user.model';
import { Todo } from '../../models/todo.model';
import { switchMap } from 'rxjs';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users: User[] = [];
    userTodos: { [key: number]: Todo[] } = {};

    constructor(private userService: UserService, private todoService: TodoService) { }

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe(users => {
            this.users = users;
            this.loadTodos();
        });
    }
    
    private loadTodos(): void {
        const savedTodos = sessionStorage.getItem('todos');
        if (savedTodos) {
            const todos: Todo[] = JSON.parse(savedTodos);
            this.populateUserTodos(todos);
        } else {
            this.todoService.getAllTodos().subscribe(todos => {
                this.populateUserTodos(todos);
            });
        }
    }

    private populateUserTodos(todos: Todo[]): void {
        todos.forEach(todo => {
            if (!this.userTodos[todo.userId]) {
                this.userTodos[todo.userId] = [];
            }
            this.userTodos[todo.userId].push(todo);
        });
    }

    toggleCompletion(todo: Todo): void {
        todo.completed = !todo.completed;
        
        this.saveTodosToSession();
    }
    
    private saveTodosToSession(): void {
        const flattenedTodos: Todo[] = Object.values(this.userTodos).reduce((acc, userTodos) => [...acc, ...userTodos], []);
      
        sessionStorage.setItem('todos', JSON.stringify(flattenedTodos));
    }
}