import React from 'react';
import ShowInfo from './ShowInfo';
import EditTask from './EditTask';

export default class Edit extends React.Component {
    render() {
        return (
            this.props.editable ? 
                <EditTask 
                    updateTaskAction={this.props.updateTaskAction}
                    setEditableAction={this.props.setEditableAction}
                    task={this.props.task}
                />
            : 
                <ShowInfo 
                    setEditableAction={this.props.setEditableAction}
                    task={this.props.task}
                />
        )
    }
}