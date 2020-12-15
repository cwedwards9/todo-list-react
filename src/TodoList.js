import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    render() {
        let todos = this.state.todos.map(todo => {
            return (
                <Todo 
                    todoName={todo.todoName}
                    key={todo.id}
                    id={todo.id}
                    removeTodo={this.removeTodo}
                />
        )});

        return (
            <div>
                <h1>Todo List w/ React</h1>
                {todos}
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default TodoList;