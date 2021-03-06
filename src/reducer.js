import { combineReducers } from "redux";

const project = (state = {loading: false, data: []}, action) => {
  switch (action.type) {
    case "FETCH_PROJECTS_FAILURE":
      return state
    case "FETCH_PROJECTS_SUCCESS":
      return {...state, loading: false, data: action.payload}
    default:
      return state;
  }
};

const isAppLoading = (state = false, action) => {
  switch (action.type) {
    case "APP_INIT":
      return true
      case "APP_INIT_FINISHED":
        return false
    default:
      return state
  }
};

const selectedtags = (state = [], action) => {
  switch (action.type) {
    // TODO
    default:
      return state;
  }
};

const selectedPoint = (point={}, action) => {
  switch (action.type) {
    case "SELECT_POINT":
    return {point: action.payload}
    case "DESELECT_POINT":
    return {point: null}
    default:
      return point;
  }
};

const shops = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const similars = (state = {}, action) => {
  switch (action.type) {
    case "FIND_PROJECT_SIMILARS":
      return {};
    case "RECEIVE_SHOP_SIMILAR":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
	isAppLoading,
  project,
  selectedPoint,
  shops,
  similars
})
