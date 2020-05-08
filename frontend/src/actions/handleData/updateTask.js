import { actions } from '../';

export default function updateTask(data) {
    return function (dispatch) {
        dispatch(actions.requestStarted());
        return fetch('http://localhost:4000/api/updateTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(
            () => fetch(`http://localhost:4000/api/task/${data.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(
                response =>  response.json()
            ).then(
                task => {
                    dispatch(actions.requestSuccess(null, task, null));
                    dispatch(actions.requestFinished());
                },
                err => {
                    dispatch(actions.requestFailed(err));
                    dispatch(actions.requestFinished());
                }
            ),
            err => {
                dispatch(actions.requestFailed(err))
                dispatch(actions.requestFinished());
            }
        )
    }
}