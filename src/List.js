import React, { Component } from 'react'
import Checkbox from './Checkbox'


const NewList = props => {
    const content = props.taskList.map((row, index) => {
        return (
            <div className="checkbox-inline">
                <label key={index}>
                    <Checkbox /> {row.task}
                </label>
            </div>
        )
    })

    return content;
} 

class List extends Component{
    render(){
        const { taskList } = this.props

        return(
            <div>
                <NewList taskList={taskList} />
            </div>
        )
    }
}

export default List