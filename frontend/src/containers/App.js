import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import AddAndList from './../components/main/AddAndList';
import About from './../components/main/About';
import WelcomePage from './../components/main/WelcomePage';
import Err from './../components/main/Err';
import Edit from './../components/main/Edit';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { actions } from '../actions';
import ReqHandler from '../utils/requestsHandler';

class App extends React.Component {
    render() {
            return (
                <React.Fragment>
                    <Header />
                        <main className="container bg-light flex-fill">
                            <Switch>
                                <Route exact path="/">
                                    <WelcomePage 
                                        fetched={this.props.fetched}
                                        fetching={this.props.fetching}
                                        err={this.props.err}

                                        editable={this.props.editable}

                                        setDisableEditAction={this.props.setDisableEditAction} 
                                        setGetServerState={this.props.setGetServerState} />
                                </Route>
                                
                                <Route exact path="/tasks">
                                    <AddAndList
                                        fetched={this.props.fetched}
                                        fetching={this.props.fetching}
                                        list={this.props.list} 
                                        err={this.props.err}

                                        editable={this.props.editable}

                                        setDisableEditAction={this.props.setDisableEditAction}
                                        setAddTaskAction={this.props.setAddTaskAction} 
                                        setRemoveTaskAction={this.props.setRemoveTaskAction} 
                                        changeTaskStatusAction={this.props.changeTaskStatusAction} 
                                        setGetListAction={this.props.setGetListAction} />
                                </Route>

                                <Route exact path="/about">
                                    <About 
                                        fetched={this.props.fetched}
                                        fetching={this.props.fetching}
                                        err={this.props.err}

                                        editable={this.props.editable}

                                        setDisableEditAction={this.props.setDisableEditAction}
                                        setGetServerState={this.props.setGetServerState} />
                                </Route>

                                <Route exact path="/edit/:id">
                                    <Edit 
                                        fetched={this.props.fetched}
                                        fetching={this.props.fetching}
                                        err={this.props.err}
                                        task={this.props.task}

                                        editable={this.props.editable}

                                        setGetTaskAction={this.props.setGetTaskAction}
                                        updateTaskAction={this.props.updateTaskAction} 
                                        setEditableAction={this.props.setEditableAction} />
                                </Route>

                                <Route path="*">
                                    <Err 
                                        editable={this.props.editable}
                                        err={this.props.err}
                                        setDisableEditAction={this.props.setDisableEditAction} />
                                </Route>
                            </Switch>
                        </main>
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
        setGetServerState: () => {
            new ReqHandler().getServerState();
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);