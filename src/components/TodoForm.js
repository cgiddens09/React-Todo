import React from 'react';
import './styles.css'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name : ""
        };
    }

    handleChanges = e => {
        this.setState({ name: e.target.value });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.name);
        this.setState({ name: "" });
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChanges}
                />
                <button>Add Item</button>
            </form>
        );
    }

}


export default TodoForm;