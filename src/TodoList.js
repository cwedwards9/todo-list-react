import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: 
            [
                {todoName: "Walk the fish"},
                {todoName: "Mow the lawn"}
            ]
        }
    }
    render() {
        let todos = this.state.todos.map(todo => {
            return <Todo todoName={todo.todoName}/>
        })
        return (
            <div>
                {todos}
            </div>
        );
    }
}

export default TodoList;