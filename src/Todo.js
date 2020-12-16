import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {isEditing: false, todo: this.props.todoName};
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }
    toggleForm() {
        this.setState({isEditing: !this.state.isEditing});
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.todo);
        this.setState({isEditing: false});
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleToggle() {
        this.props.toggleCompletion(this.props.id);
    }

    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div className="Todo">
                    <form onSubmit={this.handleUpdate} className="Todo-edit-form">
                        <input type="text" value={this.state.todo} name="todo" onChange={this.handleChange} />
                        <button>Update</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div className="Todo">
                    <li className={this.props.completed ? "completed" : ""} onClick={this.handleToggle}>
                        {this.props.todoName}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}><i className="fas fa-pen"></i></button>
                        <button onClick={this.handleRemove}><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            );
        }
        return (
            result
        )
    }
}

export default Todo;