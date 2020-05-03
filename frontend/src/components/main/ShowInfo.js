import React from 'react';
import store from '../../store';

export default class  ShwoInfo extends React.Component {
    onBtnCLick = () => {
        this.props.setEditableAction(store.getState().editable);
    }
    render() {
        return (
            <div className="pt-2 pb-2 pl-1 pr-1 bg-light" ref={(form) => {this.form = form}}>
                <div className="list-group-item m-1">
                    <p className="text-body m-0"><strong>Task name:</strong></p>
                    <p className="text-body m-0">{this.props.task.text}</p>
                </div>
                <div className="list-group-item m-1">
                    <p className="text-body m-0"><strong>Task description:</strong></p>
                    <p className="text-body m-0">{this.props.task.description}</p>
                </div>
                <div className="list-group-item m-1">
                    <p className="text-body m-0"><strong>Task status:</strong></p>
                    <p className="text-body m-0">{this.props.task.status}</p>
                </div>
                <button className="btn btn-dark btn-block" onClick={this.onBtnCLick}>Edit task</button>
            </div>
        );
    }
}