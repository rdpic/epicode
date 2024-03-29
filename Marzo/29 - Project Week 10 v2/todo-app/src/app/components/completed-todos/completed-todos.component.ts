import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
    selector: 'app-completed-todos',
    templateUrl: './completed-todos.component.html',
    styleUrls: ['./completed-todos.component.scss']
})

export class CompletedTodosComponent implements OnInit {
    completedTodos: Todo[] = [];

    ngOnInit(): void {
        this.loadCompletedTodosFromSession();
    }

    private loadCompletedTodosFromSession(): void {
        const savedTodos = sessionStorage.getItem('todos');
        if (savedTodos) {
            const todos: Todo[] = JSON.parse(savedTodos);
            this.completedTodos = todos.filter(todo => todo.completed);
        }
    }

    refreshCompletedTodos(): void {
        this.loadCompletedTodosFromSession();
    }

}
