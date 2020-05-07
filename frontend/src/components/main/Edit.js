import React from 'react';
import ShowInfo from './ShowInfo';
import EditTask from './EditTask';
import Loading from './Loading';

export default class Edit extends React.Component {
    componentDidMount() {
        this.props.setGetTaskAction(window.location.pathname.split('/')[window.location.pathname.split('/').length-1]);
    }
    render() {
        if (this.props.fetched && !this.props.fetching && !this.props.err && this.props.task && Object.prototype.toString.call(this.props.task) === '[object Object]') {
            document.title = `Edit task | ${this.props.task.text} | ToDo List`;
            return (
                this.props.editable ? 
                    <EditTask 
                        updateTaskAction={this.props.updateTaskAction}
                        setEditableAction={this.props.setEditableAction}
                        task={this.props.task}
                        fetched={this.props.fetched}
                        fetching={this.props.fetching}

                        editable={this.props.editable}
                    />
                : 
                    <ShowInfo 
                        setEditableAction={this.props.setEditableAction}
                        task={this.props.task}

                        editable={this.props.editable}
                    />
            )
        } else if (this.props.fetched && !this.props.fetching && this.props.err && !this.props.task) {
            document.title = 'Edit task | Error | ToDo List';
            return (
                <React.Fragment>
                    <main className="container bg-light flex-fill">
                        <p>{this.props.err}</p>
                    </main>
                </React.Fragment>
            )
        } else if (this.props.fetched && !this.props.fetching && !this.props.err && Object.prototype.toString.call(this.props.task) === '[object String]') {
            document.title = 'Edit task | Task not found | ToDo List';
            return (
                <React.Fragment>
                    <main className="container bg-light flex-fill">
                        <p>{this.props.task}</p>
                    </main>
                </React.Fragment>
            )
        } else {
            document.title = 'Edit task | Loading | ToDo List';
            return (
                <Loading />
            )
        }
    }
}