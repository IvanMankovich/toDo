import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer className="navbar navbar-expand-sm bg-dark navbar-light justify-content-center container-fluid align-self-end">
                    <p className="text-light">All rights reserved. <span className="text-muted">That's not strictly true, is it?</span></p>
                </footer>
            </React.Fragment>
        );
    }
}