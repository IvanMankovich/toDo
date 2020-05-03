import React from 'react';
import List from './List';
import InputContainer from './InputContainer';
import Loading from './Loading';

export default class AddAndList extends React.Component {
    componentDidMount() {
        this.props.setGetListAction();
        this.props.editable && this.props.setDisableEditAction();
    }
    
    render() {
        if (this.props.fetched && !this.props.fetching && this.props.list && !this.props.err) {
            return (
                <React.Fragment>
                    <InputContainer setAddTaskAction={this.props.setAddTaskAction} />
                    <List 
                        list={this.props.list} 
                        setRemoveTaskAction={this.props.setRemoveTaskAction} 
                        changeTaskStatusAction={this.props.changeTaskStatusAction} />
                </React.Fragment>
            );
        } else if (this.props.fetched && !this.props.fetching && !this.props.list && this.props.err) {
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