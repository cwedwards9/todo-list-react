import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    render() {
        return (
            <div>
                <p>{this.props.todoName}</p>
                <button>Edit</button>
                <button onClick={this.handleRemove}>X</button>
            </div>
        )
    }
}

export default Todo;