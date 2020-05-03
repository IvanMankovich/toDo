import React from 'react';
import store from '../../store';

export default class EditTask extends React.Component {
    onSwitchChange = (e) => {
        this.taskStatus.checked = e.currentTarget.checked ? true : false;
    }
    onBtnCLick = () => {
        this.props.updateTaskAction({id: this.props.task.id, text: this.taskName.value, description: this.taskDescr.value, status: this.taskStatus.checked ? 'Active' : 'Done'});
        this.props.setEditableAction(store.getState().editable);
    }
    render() {
        return (
            store.getState().fetched && !store.getState().fetching ?
            <div className="pt-2 pb-2 pl-1 pr-1 bg-light" ref={(form) => {this.form = form}}>
                <div className="form-group">
                    <label htmlFor="taskName">Task name:</label>
                    <input className="form-control" id="taskName" type="text" ref={(input) => {this.taskName = input}} defaultValue={this.props.task.text}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="taskDescr">Task description:</label>
                    <input className="form-control" id="taskDescr" type="text" ref={(input) => {this.taskDescr = input}} defaultValue={this.props.task.description}></input>
                </div>
                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="taskStatus" name="taskStatus" ref={(input) => {this.taskStatus = input}} defaultChecked={this.props.task.status === 'Active'}></input>
                    <label className="custom-control-label" htmlFor="taskStatus">Active:</label>
                </div>
                <button className="btn btn-dark btn-block" onClick={this.onBtnCLick}>Save changes</button>
            </div>
            : <div className="spinner-border"></div>
        );
    }
}