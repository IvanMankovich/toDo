import { actions } from '../';

export default function getServerState() {
    return function (dispatch) {
        dispatch(actions.requestStarted());
        return fetch('http://localhost:4000/api/state', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(
            response =>  response.json()
        ).then(
            status => {
                dispatch(actions.requestSuccess(null, null, status));
                dispatch(actions.requestFinished());
            },
            err => {
                dispatch(actions.requestFailed(err));
                dispatch(actions.requestFinished());
            }
        )
    }
}