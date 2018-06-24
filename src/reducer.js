import { combineReducers } from "redux";

const project = (state = {loading: false, data: []}, action) => {
  switch (action.type) {
    case "FETCH_PROJECTS_FAILURE":
      return state
    case "FETCH_PROJECTS_SUCCES":
      return {...state, loading: false, data: action.payload}
    default:
      return state;
  }
};

const isAppLoading = (state = false, action) => {
  switch (action.type) {
    case "APP_INIT":
      return true
    // case "FETCH_PROJECTS_SUCCES": {
    //   return false
    // }
    default:
      return state
  }
};

// const selectedtags = (state = [], action) => {
//   switch (action.type) {
//     // TODO
//     default:
//       return state;
//   }
// };
//
// const selectedPoint = (state = null, action) => {
//   switch (action.type) {
//     // TODO
//     default:
//       return state;
//   }
// };
//
// const shops = (state = [], action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
//
// const similars = (state = {}, action) => {
//   switch (action.type) {
//     // TODO
//     default:
//       return state;
//   }
// };

export default combineReducers({
	isAppLoading,
  project
})
