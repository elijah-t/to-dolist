import React, { Component } from 'react'
import List from './List.js'
import Checkbox from './Checkbox.js'
import Form from './Form.js'

class App extends Component {
    
    state = {
        tasks: [],
    }

    handleSubmit = task => {
        this.setState({ tasks: [...this.state.tasks, task] })
    }

    render(){
        const { tasks } = this.state

        return(
            <div className="container">
                <h1>To-do List</h1>
                <h2>What needs to be done?</h2>
                <List taskList={tasks}/>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App