import React from 'react';
import Loading from './Loading';

export default class About extends React.Component {
    componentDidMount() {
        this.props.setGetServerState();
        this.props.editable && this.props.setDisableEditAction();
    }
    
    render() {
        if (this.props.fetched && !this.props.fetching && !this.props.err) {
            document.title = 'About || ToDo List';
            return (
                <React.Fragment>
                    <h2>Motivation</h2>
                        <p>The main idea of this application is to make editable list of actions which you want to do.</p>
                        <p>This application was created with the aim to recive an experience of working with React, Redux by my own.</p>
                    <h2>Application description</h2>
                        <p>There are some features:</p>
                            <ul>
                                <li>Add/remove tasks</li>
                                <li>Change task status</li>
                                <li>Editable task data</li>
                                <li>Task data are located at server and hanled at client browser</li>
                            </ul>
                    <h2>Used technologies:</h2>
                    <ul>
                        <li>Frontend
                            <ul>
                                <li>ES6</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>React-Router</li>
                                <li>Bootstrap 4</li>
                                <li>AJAX</li>
                            </ul>
                        </li>
                        <li>Backend
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                            </ul>
                        </li>
                    </ul>
                    <h2>Contacts</h2>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/ivan-mankovich/" title="">LinkedIn</a></li>
                            <li><a href="mailto:mankovich.ivan@gmail.com">Mail</a></li>
                        </ul>
                </React.Fragment>
            );
        } else if (this.props.fetched && !this.props.fetching && this.props.err) {
            document.title = 'About | Error | ToDo List';
            return (
                <React.Fragment>
                    <main className="container bg-light flex-fill">
                        <p>{this.props.err}</p>
                    </main>
                </React.Fragment>
            )
        } else {
            document.title = 'About | Loading | ToDo List';
            return (
                <Loading />
            )
        }
    }
}