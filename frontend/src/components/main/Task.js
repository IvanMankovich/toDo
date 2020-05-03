import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Task extends React.Component {
    onBtnCLick = (e) => {
        e.target.className === "col-sm-4 col-md-3 btn btn-secondary" ? this.props.changeTaskStatusAction(this.props.data) : this.props.setRemoveTaskAction(this.props.data.id);
    }
    render() {
        return (
            <div className="d-flex justify-content-between alert alert-secondary list-group-item-action list-group-item-dark" ref={el => this.el = el}>
                <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={
                        <Tooltip id={`tooltip-${"top"}`}>
                            <strong>{this.props.data.description}</strong>
                        </Tooltip>
                    }>
                    <Link to={`/edit/${this.props.data.id}`} className="col-sm-4 col-md-6 text-body text-break" data-toggle="tooltip" data-placement="top">{this.props.data.text}</Link>
                </OverlayTrigger>
                {this.props.data.status === "Done" ? <p className="col-sm-4 col-md-3 text-muted text-center text-break m-0">Task completed</p> : <button type="button" className="col-sm-4 col-md-3 btn btn-secondary" onClick={this.onBtnCLick}>Done</button>}
                <button type="button" className="col-sm-4 col-md-3 btn btn-danger ml-2" onClick={this.onBtnCLick}>Remove task</button>
            </div>
        )
    }
}