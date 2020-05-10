export const initialState = {
  fetching: false,
  fetched: false,
  err: null,
  list: null,
  editable: false,
  task: null,
  serverState: null,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_STARTED':
      return {
        ...state,
        fetching: true,
        fetched: false,
        err: null,
        editable: false,
      }

    case 'REQUEST_SUCCESS':
      if (action.payload && action.task && action.serverState) {
        return {
          ...state,
          fetching: false,
          fetched: false,
          err: null,
          list: action.payload,
          editable: false,
          task: action.task,
          serverState: action.serverState,
        }

      } else if (action.payload && !action.task && action.serverState) {
        return {
          ...state,
          fetching: false,
          fetched: false,
          err: null,
          list: action.payload,
          editable: false,
          task: null,
          serverState: action.serverState,
        }

      } else if (action.payload && action.task && !action.serverState) {
        return {
          ...state,
          fetching: false,
          fetched: false,
          err: null,
          list: action.payload,
          editable: false,
          task: action.task,
        }

      } else if (action.payload && !action.task && !action.serverState) {
        return {
          ...state,
          fetching: false,
          fetched: false,
          err: null,
          list: action.payload,
          editable: false,
          task: null,
        }

      } else if (!action.payload && action.task && !action.serverState) {
        return {
          ...state,
          fetching: false,
          fetched: false,
          err: null,
          editable: false,
          task: action.task,
        }

      } else if (!action.payload && !action.task && action.serverState) {
        return {
          ...state,
          fetching: false,
          fetched: false,
          err: null,
          editable: false,
          serverState: action.serverState,
        }

      } else if (!action.payload && action.task && action.serverState) {
        return {
          ...state,
          fetching: false,
          fetched: false,
          err: null,
          editable: false,
          task: action.task,
          serverState: action.serverState,
        }

      } else{
        return {
          ...state,
          err: 'Unknown error.',
        }
      }

    case 'REQUEST_FAILED':
      return {
        ...state,
        fetching: false,
        fetched: false,
        err: action.payload.message,
        list: null,
        editable: false,
        task: null,
      }

    case 'REQUEST_FINISHED':
      return {
        ...state,
        fetching: false,
        fetched: true,
      }

    case 'SET_EDITABLE':
      return {
        ...state,
        editable: !action.payload,
      }

    case 'DISABLE_EDIT':
      return {
        ...state,
        editable: false,
      }
  
    default:
      return state;
  }
};