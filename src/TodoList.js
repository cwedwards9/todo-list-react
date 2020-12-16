import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
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
    toggleCompletion(id) {
        const updatedList =  this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
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
                    completed={todo.completed}
                    removeTodo={this.removeTodo}
                    updateTodo={this.updateTodo}
                    toggleCompletion={this.toggleCompletion}
                />
        )});

        return (
            <div className="TodoList">
                <h1>Todo List</h1>
                <ul>{todos}</ul>
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default TodoList;