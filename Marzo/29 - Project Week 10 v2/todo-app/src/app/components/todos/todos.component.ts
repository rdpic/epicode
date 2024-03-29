import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import { User } from '../../models/user.model';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
    todos: Todo[] = [];
    users: User[] = [];
    filteredTodos!: Observable<Todo[]>;
    searchControl = new FormControl();

    constructor(private todoService: TodoService, private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe(users => {
            this.users = users;
          });
        
          const savedTodos = sessionStorage.getItem('todos');
          if (savedTodos) {
            this.todos = JSON.parse(savedTodos);
          } else {
            this.todoService.getAllTodos().subscribe(todos => {
              this.todos = todos;
              this.saveTodosToSession(); // Save initially fetched todos to session
            });
          }
        
          this.filteredTodos = this.searchControl.valueChanges.pipe(
            startWith(''),
            map(text => this.search(text || ''))
          );

    }

    toggleCompletion(todo: Todo): void {
        todo.completed = !todo.completed;

        const index = this.todos.findIndex(t => t.id === todo.id);

        if (index !== -1) {
            this.todos[index] = todo;
        }

        this.saveTodosToSession();
    }

    private saveTodosToSession(): void {
        const todosString = JSON.stringify(this.todos);
      
        sessionStorage.setItem('todos', todosString);
    }

    private search(text: string): Todo[] {
        if (!text.trim()) {
            return this.todos;
        }

        return this.todos.filter(todo => {
            const user = this.users.find(u => u.id === todo.userId);
            const searchText = text.toLowerCase();
            return user && (user.firstName.toLowerCase().includes(searchText) || user.lastName.toLowerCase().includes(searchText));
        });
    }
    getUserFullName(userId: number): string {
        const user = this.users.find(u => u.id === userId);
        return user ? `${user.firstName} ${user.lastName}` : 'Unknown';
    }
}