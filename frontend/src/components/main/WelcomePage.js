import React from 'react';
import {Link} from 'react-router-dom';
import Loading from './Loading';

export default class WelcomePage extends React.Component {
    componentDidMount() {
        this.props.setGetServerState();
        this.props.setDisableEditAction();
    }
    
    render() {
        if (this.props.fetched && !this.props.fetching && !this.props.err) {
            return (
                <React.Fragment>
                    <h1 className="text-center">Welcome to ToDo List Application!</h1>
                    <h2 className="text-center">Make your own tasks, edit them if needed, complete them all or just remove them. Have fun.</h2>
                    <Link to="/tasks" className="d-flex justify-content-center">
                        <button className="btn btn-dark pl-4 pr-4 pt-2 pb-2" type="button">Start</button>
                    </Link>
                </React.Fragment>
            );
        } else if (this.props.fetched && !this.props.fetching && this.props.err) {
            return (
                <React.Fragment>
                    <main className="container bg-light flex-fill">
                        <p>{this.props.err}</p>
                    </main>
                </React.Fragment>
            )
        } else {
            return (
                <Loading />
            )
        }
    }
}