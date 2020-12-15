import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: 
            [
                {todoName: "Walk the fish"},
                {todoName: "Mow the lawn"}
            ]
        };
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render() {
        let todos = this.state.todos.map(todo => {
            return <Todo todoName={todo.todoName}/>
        })
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