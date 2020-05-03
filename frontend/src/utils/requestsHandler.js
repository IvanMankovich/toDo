import store from '../store';
import Tasks from './dataHandler';
import { actions } from '../actions';

class ReqHandler {
    getOnlyList() {
        store.dispatch(actions.requestStarted());
        new Tasks().getTasksList().then(
            list => {
                store.dispatch(actions.requestSuccess(list, null));
                store.dispatch(actions.requestFinished());
            },
            err => {
                store.dispatch(actions.requestFailed(err));
                store.dispatch(actions.requestFinished());
            }
        )
    }

    addTask(data) {
        store.dispatch(actions.requestStarted());
        new Tasks().addTask(data).then(
            () => new Tasks().getTasksList().then(
                list => {
                    store.dispatch(actions.requestSuccess(list));
                    store.dispatch(actions.requestFinished());
                },
                err => {
                    store.dispatch(actions.requestFailed(err));
                    store.dispatch(actions.requestFinished());
                }
            ),
            err => {
                store.dispatch(actions.requestFailed(err))
                store.dispatch(actions.requestFinished());
            }
        )
    }

    removeTask(id) {
        store.dispatch(actions.requestStarted());
        new Tasks().removeTask(id).then(
            () => new Tasks().getTasksList().then(
                list => {
                    store.dispatch(actions.requestSuccess(list));
                    store.dispatch(actions.requestFinished());
                },
                err => {
                    store.dispatch(actions.requestFailed(err));
                    store.dispatch(actions.requestFinished());
                }
            ),
            err => {
                store.dispatch(actions.requestFailed(err));
                store.dispatch(actions.requestFinished());
            }
        )
    }

    changeStatus(data) {
        store.dispatch(actions.requestStarted());
        new Tasks().changeTaskStatus(data).then(
            () => new Tasks().getTasksList().then(
                list => {
                    store.dispatch(actions.requestSuccess(list));
                    store.dispatch(actions.requestFinished());
                },
                err => {
                    store.dispatch(actions.requestFailed(err));
                    store.dispatch(actions.requestFinished());
                }
            ),
            err => {
                store.dispatch(actions.requestFailed(err));
                store.dispatch(actions.requestFinished());
            }
        )
    }

    getTask(id) {
        store.dispatch(actions.requestStarted());
        new Tasks().getTasksList().then(
            () => new Tasks().getTask(id).then(
                data => {
                    store.dispatch(actions.requestSuccess(null, data))
                    store.dispatch(actions.requestFinished());
                },
                err => {
                    store.dispatch(actions.requestFailed(err));
                    store.dispatch(actions.requestFinished());
                }
            ),
            err => {
                store.dispatch(actions.requestFailed(err));
                store.dispatch(actions.requestFinished());
            }
        )
    }

    updateTask(data) {
        store.dispatch(actions.requestStarted());
        new Tasks().updateTask(data).then(
            () => new Tasks().getTasksList().then(
                list => {
                    store.dispatch(actions.requestSuccess(list));
                    store.dispatch(actions.requestFinished());
                },
                err => {
                    store.dispatch(actions.requestFailed(err));
                    store.dispatch(actions.requestFinished());
                }
            ),
            err => {
                store.dispatch(actions.requestFailed(err));
                store.dispatch(actions.requestFinished());
            }
        )
    }
}

export default ReqHandler;