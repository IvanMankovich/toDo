import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { Main } from '../components/main'
import Footer from '../components/Footer';
import { actions } from '../actions';
import ReqHandler from '../utils/requestsHandler';

class App extends React.Component {
    componentDidMount() {
        this.props.setGetListAction();
    }
    
    render() {
        return (
            <React.Fragment>
                <Header />
                <Main
                    match={this.props.match}
                    
                    list={this.props.list}
                    task={this.props.task}
                    err={this.props.err}

                    fetched={this.props.fetched}
                    fetching={this.props.fetching}
                    editable={this.props.editable}

                    setGetListAction={this.props.setGetListAction}
                    setAddTaskAction={this.props.setAddTaskAction}
                    setRemoveTaskAction={this.props.setRemoveTaskAction}
                    changeTaskStatusAction={this.props.changeTaskStatusAction}
                    updateTaskAction={this.props.updateTaskAction}
                    setGetTaskAction={this.props.setGetTaskAction}

                    setEditableAction={this.props.setEditableAction}
                    setDisableEditAction={this.props.setDisableEditAction}
                />
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => {
    return {
        list: store.list,
        editable: store.editable,
        task: store.task,
        fetched: store.fetched,
        fetching: store.fetching,
        match: store.match,
        err: store.err,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setGetListAction: () => {
            new ReqHandler().getOnlyList();
        },
        setAddTaskAction: data => {
            new ReqHandler().addTask(data);
        },
        setRemoveTaskAction: id => {
            new ReqHandler().removeTask(id);
        },
        changeTaskStatusAction: data => {
            new ReqHandler().changeStatus(data);
        },
        updateTaskAction: data => {
            new ReqHandler().updateTask(data);
        },
        setGetTaskAction: id => {
            new ReqHandler().getTask(id);
        },
        setEditableAction: status => {
            dispatch(actions.setEditable(status))
        },
        setDisableEditAction: () => {
            dispatch(actions.disableEdit())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);