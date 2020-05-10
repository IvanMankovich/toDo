import React from 'react';
import { Link } from 'react-router-dom';

export default function Err() {
    document.title = 'Error || ToDo List';

    return (
        <React.Fragment>
            <h2>Ooops... Something wents wrong. Please, check entered address.</h2>
            <Link to="/">
                Go to start page.
            </Link>
        </React.Fragment>
    );
}