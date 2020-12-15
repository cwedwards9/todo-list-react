import React, { Component } from "react";

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {todoName: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addTodo(this.state);
        this.setState({todoName: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="newTodo">New Todo: </label>
                <input 
                    type="text" 
                    id="newTodo" 
                    name="todoName" 
                    value={this.state.todoName}
                    onChange={this.handleChange}
                />

                <button>Add Todo</button>
            </form>
        );
    }
}

export default NewTodoForm;