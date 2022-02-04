import {
  ABOUT_DETAILS_FAIL,
  ABOUT_DETAILS_REQUEST,
  ABOUT_DETAILS_SUCCESS,
  ADMIN_ABOUT_FAIL,
  ADMIN_ABOUT_REQUEST,
  ADMIN_ABOUT_SUCCESS,
  ALL_ABOUT_FAIL,
  ALL_ABOUT_REQUEST,
  ALL_ABOUT_SUCCESS,
  CLEAR_ERRORS,
  DELETE_ABOUT_FAIL,
  DELETE_ABOUT_REQUEST,
  DELETE_ABOUT_RESET,
  DELETE_ABOUT_SUCCESS,
  NEW_ABOUT_FAIL,
  NEW_ABOUT_REQUEST,
  NEW_ABOUT_RESET,
  NEW_ABOUT_SUCCESS,
  UPDATE_ABOUT_FAIL,
  UPDATE_ABOUT_REQUEST,
  UPDATE_ABOUT_RESET,
  UPDATE_ABOUT_SUCCESS,
} from "../constants/aboutConstant";

export const aboutsReducer = (state = { abouts: [] }, action) => {
  switch (action.type) {
    case ALL_ABOUT_REQUEST:
    case ADMIN_ABOUT_REQUEST:
      return {
        loading: true,
        abouts: [],
      };
    case ALL_ABOUT_SUCCESS:
      return {
        loading: false,
        abouts: action.payload.abouts,
      };

    case ADMIN_ABOUT_SUCCESS:
      return {
        loading: false,
        abouts: action.payload,
      };

    case ALL_ABOUT_FAIL:
    case ADMIN_ABOUT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const aboutDetailsReducer = (state = { about: {} }, action) => {
  switch (action.type) {
    case ABOUT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case ABOUT_DETAILS_SUCCESS:
      return {
        loading: false,
        about: action.payload,
      };
    case ABOUT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newAboutReducer = (state = { about: {} }, action) => {
  switch (action.type) {
    case NEW_ABOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_ABOUT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        about: action.payload.about,
      };
    case NEW_ABOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_ABOUT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const aboutReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ABOUT_REQUEST:
    case UPDATE_ABOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ABOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_ABOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_ABOUT_FAIL:
    case UPDATE_ABOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_ABOUT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_ABOUT_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
