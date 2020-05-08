import { actions } from '../';
// import Tasks from '../../utils/dataHandler';

export default function removeTask(id) {
    return function (dispatch) {
        dispatch(actions.requestStarted());
        return fetch(`http://localhost:4000/api/task/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
        }).then(
            () => fetch('http://localhost:4000/api/tasks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(
                response => response.json()
            ).then(
                list => {
                    dispatch(actions.requestSuccess(list, null, null));
                    dispatch(actions.requestFinished());
                },
                err => {
                    dispatch(actions.requestFailed(err));
                    dispatch(actions.requestFinished());
                }
            ),
            err => {
                dispatch(actions.requestFailed(err));
                dispatch(actions.requestFinished());
            }
        )
    }
}