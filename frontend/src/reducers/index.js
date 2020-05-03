export const initialState = {
  fetching: false,
  fetched: false,
  err: null,
  list: null,
  editable: false,
  task: null,
  match: [],
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
      if (action.payload && action.task) {
        return {
          ...state,
          fetching: false,
          fetched: false,
          err: null,
          list: action.payload,
          editable: false,
          task: action.task,
          match: action.payload.map(task => {
            return `edit/${task.id}`;
          }),
        }
      } else if (action.payload && !action.task) {
        return {
          ...state,
          fetching: false,
          fetched: false,
          err: null,
          list: action.payload,
          editable: false,
          task: null,
          match: action.payload.map(task => {
            return `/edit/${task.id}`;
          }),
        }
      } else if (!action.payload && action.task) {
        return {
          ...state,
          fetching: false,
          fetched: false,
          err: null,
          editable: false,
          task: action.task,
        }
      }
      break;

    case 'REQUEST_FAILED':
      return {
        ...state,
        fetching: false,
        fetched: false,
        err: action.payload,
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