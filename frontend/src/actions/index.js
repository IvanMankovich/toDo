import requestStarted from './requestStarted';
import requestSuccess from './requestSuccess';
import requestFailed from './requestFailed';
import setEditable from './setEditable';
import requestFinished from './requestFinished';
import disableEdit from './disableEdit';

const actions = {
    requestStarted: requestStarted,
    requestSuccess: requestSuccess,
    requestFailed: requestFailed,
    setEditable: setEditable,
    requestFinished: requestFinished,
    disableEdit: disableEdit,
};

export { actions };