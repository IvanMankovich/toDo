import { actions } from '../';
import Tasks from '../../utils/dataHandler';

export default function getServerState() {
    return function (dispatch) {
        dispatch(actions.requestStarted());
        return new Tasks().getServerState().then(
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