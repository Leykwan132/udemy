import { CHANGE_SEARCH_FIELD } from "./constants.js";
import {
  SEARCH_ROBOT_FAILED,
  SEARCH_ROBOT_SUCCESS,
  SEARCH_ROBOT_PENDING
} from "./constants.js";

const initialStateSearch = {
  // initial object of redux
  searchField: ""
};

export const searchRobot = (state = initialStateSearch, action = {}) => {
  //initial state
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
}; // reducer function.

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ""
};

export const requestRobot = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case SEARCH_ROBOT_PENDING:
      return Object.assign({}, state, { isPending: true });
    case SEARCH_ROBOT_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false
      });
    case SEARCH_ROBOT_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });
    default:
      return state;
  }
};
