import React from 'react';
import Task from './Task.js';

export default function List(props) {
    const tasks = props.list.length ? props.list.map(task => {
        return (<Task key={task.id} data={task} />)
    }) : <p>No elements.</p> ;
    
    return (
        <div className="list-group">
            {tasks}
        </div>
    )
}