import React from 'react';
import { Link } from 'react-router-dom';

export default class Err extends React.Component {
    componentDidMount() {
        this.props.editable && this.props.setDisableEditAction();
    }
    
    render() {
        return (
            <React.Fragment>
                <h2>Ooops... Something wents wrong. Please, check entered address.</h2>
                <Link to="/">
                    Go to start page.
                </Link>
            </React.Fragment>
        );
    }
}