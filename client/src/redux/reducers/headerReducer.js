import {
  ADMIN_HEADER_FAIL,
  ADMIN_HEADER_REQUEST,
  ADMIN_HEADER_SUCCESS,
  ALL_HEADER_FAIL,
  ALL_HEADER_REQUEST,
  ALL_HEADER_SUCCESS,
  CLEAR_ERRORS,
  DELETE_HEADER_FAIL,
  DELETE_HEADER_REQUEST,
  DELETE_HEADER_RESET,
  DELETE_HEADER_SUCCESS,
  HEADER_DETAILS_FAIL,
  HEADER_DETAILS_REQUEST,
  HEADER_DETAILS_SUCCESS,
  NEW_HEADER_FAIL,
  NEW_HEADER_REQUEST,
  NEW_HEADER_RESET,
  NEW_HEADER_SUCCESS,
  UPDATE_HEADER_FAIL,
  UPDATE_HEADER_REQUEST,
  UPDATE_HEADER_RESET,
  UPDATE_HEADER_SUCCESS,
} from "../constants/headerConstant";

export const headersReducer = (state = { headers: [] }, action) => {
  switch (action.type) {
    case ALL_HEADER_REQUEST:
    case ADMIN_HEADER_REQUEST:
      return {
        loading: true,
        headers: [],
      };
    case ALL_HEADER_SUCCESS:
      return {
        loading: false,
        headers: action.payload.headers,
      };

    case ADMIN_HEADER_SUCCESS:
      return {
        loading: false,
        headers: action.payload,
      };

    case ALL_HEADER_FAIL:
    case ADMIN_HEADER_FAIL:
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

export const headerDetailsReducer = (state = { header: {} }, action) => {
  switch (action.type) {
    case HEADER_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case HEADER_DETAILS_SUCCESS:
      return {
        loading: false,
        header: action.payload,
      };
    case HEADER_DETAILS_FAIL:
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

export const newHeaderReducer = (state = { header: {} }, action) => {
  switch (action.type) {
    case NEW_HEADER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_HEADER_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        header: action.payload.header,
      };
    case NEW_HEADER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_HEADER_RESET:
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

export const headerReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_HEADER_REQUEST:
    case UPDATE_HEADER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_HEADER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_HEADER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_HEADER_FAIL:
    case UPDATE_HEADER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_HEADER_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_HEADER_RESET:
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
