import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleData } from '../../actions'

export default function InputContainer() {
    const [taskName, setTaskName] = useState(),
          [taskDescr, setTaskDescr] = useState();
    
    const dispatch = useDispatch();

    const onBtnCLick = () => {
        dispatch(handleData.addTask({text: taskName.value, description: taskDescr.value}));
        taskName.value = '';
        taskDescr.value = '';
    };

    return (
        <div className="pt-2 pb-2 pl-1 pr-1">
            <div className="form-group">
                <label htmlFor="taskName">Enter task name:</label>
                <input className="form-control" id="taskName" type="text" ref={(input) => {setTaskName(input)}}></input>
            </div>
            <div className  ="form-group">
                <label htmlFor="taskDescr">Enter task description:</label>
                <input className="form-control" id="taskDescr" type="text" ref={(input) => {setTaskDescr(input)}}></input>
            </div>
            <button className="btn btn-dark btn-block" onClick={() => onBtnCLick()}>Add task</button>
        </div>
    );
}