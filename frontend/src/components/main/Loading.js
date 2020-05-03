import React from 'react';

export default class Loading extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="align-self-center spinner-border"></div>
                    </div>
            </React.Fragment>
        );
    }
}