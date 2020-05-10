import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleData, actions } from '../../actions'

export default function EditTask(props) {
    const [taskName, setTaskName] = useState(),
          [taskDescr, setTaskDescr] = useState(),
          [taskStatus, setTaskStatus] = useState();

    const dispatch = useDispatch();

    const onBtnCLick = () => {
        console.log('taskName', taskName.value, 'taskDescr', taskDescr.value, 'taskStatus', taskStatus.checked);
        dispatch(handleData.updateTask({id: props.task.id, text: taskName.value, description: taskDescr.value, status: taskStatus.checked ? 'Active' : 'Done' }));
        dispatch(actions.disableEdit(props.editable));
    };

    return (
        <div className="pt-2 pb-2 pl-1 pr-1 bg-light" ref={(form) => form}>
            <div className="form-group">
                <label htmlFor="taskName">Task name:</label>
                <input className="form-control" id="taskName" type="text" ref={(input) => {setTaskName(input)}} defaultValue={props.task.text}></input>
            </div>
            <div className="form-group">
                <label htmlFor="taskDescr">Task description:</label>
                <input className="form-control" id="taskDescr" type="text" ref={(input) => {setTaskDescr(input)}} defaultValue={props.task.description}></input>
            </div>
            <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="taskStatus" name="taskStatus" ref={(input) => {setTaskStatus(input)}} defaultChecked={props.task.status === 'Active'}></input>
                <label className="custom-control-label" htmlFor="taskStatus">Active:</label>
            </div>
            <button className="btn btn-dark btn-block" onClick={() => onBtnCLick()}>Save changes</button>
        </div>
    );
}