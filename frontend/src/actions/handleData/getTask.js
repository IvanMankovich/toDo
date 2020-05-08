import { actions } from '../';

export default function getTask (id) {
    return function (dispatch) {
        dispatch(actions.requestStarted());
        return fetch(`http://localhost:4000/api/task/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(
            response =>  response.json()
        ).then(
            data => {
                dispatch(actions.requestSuccess(null, data, null))
                dispatch(actions.requestFinished());
            },
            err => {
                dispatch(actions.requestFailed(err));
                dispatch(actions.requestFinished());
            }
        )
    }
}