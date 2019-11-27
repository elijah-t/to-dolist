import React, { Component } from 'react'

class Checkbox extends Component{
    state = {
        checked: false
    }

    handleCheck = () => {
        this.setState({checked: !this.state.checked});
    }

    render(){
        return (
            <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
        )
    }
}

export default Checkbox