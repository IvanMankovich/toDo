import React from 'react';
import { useDispatch } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { handleData } from '../../actions'

export default function Task(props) {
    const dispatch = useDispatch();

    const onBtnCLick = (e) => {
        e.target.className === "col-sm-4 col-md-3 btn btn-secondary" ? dispatch(handleData.changeTaskStatus(props.data)) : dispatch(handleData.removeTask(props.data.id));
    };

    return (
        <div className="d-flex justify-content-between alert alert-secondary list-group-item-action list-group-item-dark" ref={el => el}>
            <OverlayTrigger
                key={"top"}
                placement={"top"}
                overlay={
                    <Tooltip id={`tooltip-${"top"}`}>
                        <strong>{props.data.description}</strong>
                    </Tooltip>
                }>
                <Link to={`/edit/${props.data.id}`} className="col-sm-4 col-md-6 text-body text-break" data-toggle="tooltip" data-placement="top">{props.data.text}</Link>
            </OverlayTrigger>
            {props.data.status === "Done" ? <p className="col-sm-4 col-md-3 text-muted text-center text-break m-0">Task completed</p> : <button type="button" className="col-sm-4 col-md-3 btn btn-secondary" onClick={(event) => onBtnCLick(event)}>Done</button>}
            <button type="button" className="col-sm-4 col-md-3 btn btn-danger ml-2" onClick={(event) => onBtnCLick(event)}>Remove task</button>
        </div>
    );
}