import React from 'react';
import List from './List';
import InputContainer from './InputContainer';

export default class AddAndList extends React.Component {
    componentDidMount() {
        this.props.setDisableEditAction();
    }
    
    render() {
        return (
            <React.Fragment>
                <InputContainer setAddTaskAction={this.props.setAddTaskAction} />
                <List 
                list={this.props.list} 
                setRemoveTaskAction={this.props.setRemoveTaskAction} 
                changeTaskStatusAction={this.props.changeTaskStatusAction} />
            </React.Fragment>
        );
    }
}