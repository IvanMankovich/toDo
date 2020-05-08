import { actions } from '../';
import Tasks from '../../utils/dataHandler';

export default function getListAction() {
    return function (dispatch) {
        dispatch(actions.requestStarted());
        return new Tasks().getTasksList().then(
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