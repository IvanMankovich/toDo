import React from 'react';
import Task from './Task.js';

export default class List extends React.Component {
    render() {
        const tasks = this.props.list.map(task => {
            return (<Task key={task.id} data={task} setRemoveTaskAction={this.props.setRemoveTaskAction} changeTaskStatusAction={this.props.changeTaskStatusAction}/>)
        });
        return (
            <div className="list-group">
                {this.props.list.length ? tasks : <p>No elements.</p>}
            </div>
        )
    }
}