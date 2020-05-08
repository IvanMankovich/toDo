import { actions } from '../';
import Tasks from '../../utils/dataHandler';

export default function updateTask(data) {
    return function (dispatch) {
        dispatch(actions.requestStarted());
        return new Tasks().updateTask(data).then(
            () => new Tasks().getTask(data.id).then(
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