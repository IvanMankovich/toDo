export default function setEditable(status) {
    return {
        type: 'SET_EDITABLE',
        payload: status,
    }
}