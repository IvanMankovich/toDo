import React from 'react';

export default class Loading extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main className="container bg-light flex-fill">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="align-self-center spinner-border"></div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}