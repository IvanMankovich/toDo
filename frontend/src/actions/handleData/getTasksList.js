import { actions } from '..';

export default function getTasksList() {
    return function (dispatch) {
        dispatch(actions.requestStarted());
        return fetch('http://localhost:4000/api/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(
            response =>  response.json()
        ).then(
            list => {
                dispatch(actions.requestSuccess(list, null, null));
                dispatch(actions.requestFinished());
            },
            err => {
                dispatch(actions.requestFailed(err));
                dispatch(actions.requestFinished());
            }
        )
    }
}