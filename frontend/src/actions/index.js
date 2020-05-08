import requestStarted from './requestStatus/requestStarted';
import requestSuccess from './requestStatus/requestSuccess';
import requestFailed from './requestStatus/requestFailed';
import requestFinished from './requestStatus/requestFinished';

import disableEdit from './editable/disableEdit';
import setEditable from './editable/setEditable';

import getTasksList from './handleData/getTasksList';
import getServerState from './handleData/getServerState';
import addTask from './handleData/addTask';
import removeTask from './handleData/removeTask';
import changeTaskStatus from './handleData/changeTaskStatus';
import getTask from './handleData/getTask';
import updateTask from './handleData/updateTask';

const actions = {
    requestStarted: requestStarted,
    requestSuccess: requestSuccess,
    requestFailed: requestFailed,
    setEditable: setEditable,
    requestFinished: requestFinished,
    disableEdit: disableEdit,
};

const handleData = {
    getTasksList: getTasksList,
    getServerState: getServerState,
    addTask: addTask,
    removeTask: removeTask,
    changeTaskStatus: changeTaskStatus,
    getTask: getTask,
    updateTask: updateTask,
}

export { actions, handleData };