import { actions } from '../';
import Tasks from '../../utils/dataHandler';

export default function getTask (id) {
    return function (dispatch) {
        dispatch(actions.requestStarted());
        return new Tasks().getTask(id).then(
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