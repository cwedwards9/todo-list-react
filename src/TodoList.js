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
        this.updateTodo = this.updateTodo.bind(this);
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
    updateTodo(id, updatedTodo) {
        const updatedList =  this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, todoName: updatedTodo}
            }
            return todo;
        });
        this.setState({todos: updatedList});
    }

    render() {
        let todos = this.state.todos.map(todo => {
            return (
                <Todo 
                    todoName={todo.todoName}
                    key={todo.id}
                    id={todo.id}
                    removeTodo={this.removeTodo}
                    updateTodo={this.updateTodo}
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