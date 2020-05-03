import React from 'react';
import {Link} from 'react-router-dom';

export default class WelcomePage extends React.Component {
    componentDidMount() {
        this.props.setDisableEditAction();
    }
    
    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">Welcome to ToDo List Application!</h1>
                <h2 className="text-center">Make your own tasks, edit them if needed, complete them all or just remove them. Have fun.</h2>
                <Link to="/tasks" className="d-flex justify-content-center">
                    <button className="btn btn-dark pl-4 pr-4 pt-2 pb-2" type="button">Start</button>
                </Link>
            </React.Fragment>
        );
    }
}