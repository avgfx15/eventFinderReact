import * as types from "./actionType";
import axios from "axios";

const getEvents = (events) => ({
  type: types.GET_EVENTS,
  payload: events,
});

const eventDeleted = () => ({
  type: types.DELETE_EVENT,
});

const addNewEvent = () => ({
  type: types.ADD_EVENT,
});

const getSingleEvent = (event) => ({
  type: types.GET_SINGLE_EVENT,
  payload: event,
});

const updateEvent = () => ({
  type: types.UPDATE_EVENT,
});

const searchEventByTitle = (event) => ({
  type: types.SEARCH_EVENT,
  payload: event,
});
export const loadEvents = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        dispatch(getEvents(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteEvent = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(eventDeleted());
        dispatch(loadEvents());
      })
      .catch((error) => console.log(error));
  };
};

export const addEvent = (event) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, event)
      .then((resp) => {
        dispatch(addNewEvent());
      })
      .catch((error) => console.log(error));
  };
};

export const getEventData = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(getSingleEvent(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateEventData = (id, event) => {
  return function (dispatch) {
    axios
      .patch(`${process.env.REACT_APP_API}/${id}`, event)
      .then((resp) => {
        dispatch(updateEvent());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const searchEventData = (title) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${title}`)
      .then((resp) => {
        dispatch(searchEventByTitle(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
