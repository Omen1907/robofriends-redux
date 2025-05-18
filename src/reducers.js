import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import { setSearchField } from "./actions";

const initialStateSearch = {
  searchField: "",
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateRobots = {
  robots: [],
  isPending: true,
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

// Reducer that is a pure function - returns state
// export const searchRobots = (state = initialStateSearch, action = {}) => {
//   switch (action.type) {
//     case CHANGE_SEARCH_FIELD:
//       return Object.assign(...state, { searchField: action.payload }); // You always wanna pass the 3rd, or in this case 2nd input, is via object
//     default:
//       return state;
//   }
// };
