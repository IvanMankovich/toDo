export default function requestSuccess(data, task, serverState) {
    return {
        type: 'REQUEST_SUCCESS',
        payload: data,
        task: task,
        serverState: serverState,
    }
}