import * as types from "./actionType";
const initialState = {
  events: [],
  event: {},
  loading: true,
};

const eventReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case types.GET_SINGLE_EVENT:
      return {
        ...state,
        event: action.payload,
        loading: false,
      };
    case types.DELETE_EVENT:
    case types.ADD_EVENT:
    case types.UPDATE_EVENT:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default eventReducers;
