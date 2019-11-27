import React, { Component } from 'react';

class Form extends Component{
    constructor(props) {
        super(props)

        this.initialState = {
            task: '',
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const { name, task } = this.state;

        return (
            <form onSubmit={this.submitForm} >
            <label>New task:</label>
            <br />
            <input
                type="text"
                name="task"
                value={name}
                onChange={this.handleChange} />
            <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form;