export default function requestFailed(err) {
    return {
        type: 'REQUEST_FAILED',
        payload: err,
    }
}