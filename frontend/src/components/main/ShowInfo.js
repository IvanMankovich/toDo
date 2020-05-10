import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../actions';

export default function ShwoInfo(props) {
    const dispatch = useDispatch();
    
    const onBtnCLick = (editable) => {
        console.log(editable);
        dispatch(actions.setEditable(editable));
    };

    return (
        <div className="pt-2 pb-2 pl-1 pr-1 bg-light" ref={(form) => form}>
            <div className="list-group-item m-1">
                <p className="text-body m-0"><strong>Task name:</strong></p>
                <p className="text-body m-0">{props.task.text}</p>
            </div>
            <div className="list-group-item m-1">
                <p className="text-body m-0"><strong>Task description:</strong></p>
                <p className="text-body m-0">{props.task.description}</p>
            </div>
            <div className="list-group-item m-1">
                <p className="text-body m-0"><strong>Task status:</strong></p>
                <p className="text-body m-0">{props.task.status}</p>
            </div>
            <button className="btn btn-dark btn-block" onClick={() => onBtnCLick(props.editable)}>Edit task</button>
        </div>
    );
}