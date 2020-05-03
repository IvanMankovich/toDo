export default function requestSuccess(data, task) {
    return {
        type: 'REQUEST_SUCCESS',
        payload: data,
        task: task,
    }
}