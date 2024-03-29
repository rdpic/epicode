import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
    providedIn: 'root'
})

export class TodoService {

    private todosUrl = 'assets/todos.json';

    constructor(private http: HttpClient) { }

    getAllTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.todosUrl);
    }

    getCompletedTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.todosUrl)
            .pipe(
                map(todos => todos.filter(todo => todo.completed))
            );
    }

    getTodosByUserId(userId: number): Observable<Todo[]> {
        return this.getAllTodos().pipe(
          map(todos => todos.filter(todo => todo.userId === userId))
        );
    }

}
