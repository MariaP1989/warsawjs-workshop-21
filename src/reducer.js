import { combineReducers } from "redux";

const isAppLoading = (state = false, action) => {
  switch (action.type) {
    case "APP_INIT":
      return true
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
	isAppLoading
})
