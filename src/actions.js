import {
  SEARCH_ROBOT_FAILED,
  SEARCH_ROBOT_SUCCESS,
  SEARCH_ROBOT_PENDING,
  CHANGE_SEARCH_FIELD
} from "./constants.js";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = dispatch => {
  dispatch({ type: SEARCH_ROBOT_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch({ type: SEARCH_ROBOT_SUCCESS, payload: data })) // 1 case
    .catch(error => dispatch({ type: SEARCH_ROBOT_FAILED, payload: error })); // for error
};
