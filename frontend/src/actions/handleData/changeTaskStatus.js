import { actions } from '../';

export default function changeTaskStatus(data) {
    return function (dispatch) {
        dispatch(actions.requestStarted());
        return fetch('http://localhost:4000/api/changeStatus', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(
            () => fetch('http://localhost:4000/api/tasks', {
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
            ),
            err => {
                dispatch(actions.requestFailed(err));
                dispatch(actions.requestFinished());
            }
        )
    }
}