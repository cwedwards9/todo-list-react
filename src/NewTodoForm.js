import React, { Component } from "react";

class NewTodoForm extends Component {
    render() {
        return (
            <form>
                <label htmlFor="newTodo">New Todo: </label>
                <input type="text" id="newTodo" />

                <button>Add Todo</button>
            </form>
        );
    }
}

export default NewTodoForm;