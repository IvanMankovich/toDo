import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddAndList from './AddAndList';
import About from './About';
import WelcomePage from './WelcomePage';
import Err from './Err';
import Edit from './Edit';
import Loading from './Loading';

import parseUrl from '../../utils/parseUrl';

export class Main extends React.Component {
    render() {
        if (this.props.fetched && !this.props.fetching && this.props.list && !this.props.err) {
            return (
                <React.Fragment>
                    <main className="container bg-light flex-fill">
                        <Switch>
                            <Route exact path="/">
                                <WelcomePage setDisableEditAction={this.props.setDisableEditAction} />
                            </Route>
                            
                            <Route exact path="/tasks">
                                <AddAndList
                                    setDisableEditAction={this.props.setDisableEditAction}
                                    list={this.props.list} 
                                    setAddTaskAction={this.props.setAddTaskAction} 
                                    setRemoveTaskAction={this.props.setRemoveTaskAction} 
                                    changeTaskStatusAction={this.props.changeTaskStatusAction} 
                                    setGetListAction={this.props.setGetListAction}
                                />
                            </Route>

                            <Route exact path="/about">
                                <About setDisableEditAction={this.props.setDisableEditAction} />
                            </Route>

                            <Route exact path={this.props.match}>
                                <Edit 
                                    setGetTaskAction={this.props.setGetTaskAction}
                                    editable={this.props.editable}
                                    list={this.props.list} 
                                    task={this.props.list.filter(task => task.id === parseUrl().split("/")[parseUrl().split("/").length - 1])[0]} 
                                    updateTaskAction={this.props.updateTaskAction} 
                                    setEditableAction={this.props.setEditableAction}
                                />
                            </Route>

                            <Route path="*">
                                <Err setDisableEditAction={this.props.setDisableEditAction} />
                            </Route>
                        </Switch>
                    </main>
                </React.Fragment>)
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