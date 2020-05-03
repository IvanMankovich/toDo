import React from 'react';

export default class InputContainer extends React.Component {
    onBtnCLick = () => {
        this.props.setAddTaskAction({text: this.taskName.value, description: this.taskDescr.value});
        this.taskName.value = "";
        this.taskDescr.value = "";
    }
    render() {
        return (
            <div className="pt-2 pb-2 pl-1 pr-1">
                <div className="form-group">
                    <label htmlFor="taskName">Enter task name:</label>
                    <input className="form-control" id="taskName" type="text" ref={(input) => {this.taskName = input}}></input>
                </div>
                <div className  ="form-group">
                    <label htmlFor="taskDescr">Enter task description:</label>
                    <input className="form-control" id="taskDescr" type="text" ref={(input) => {this.taskDescr = input}}></input>
                </div>
                <button className="btn btn-dark btn-block" onClick={this.onBtnCLick}>Add task</button>
            </div>
        )
    }
}