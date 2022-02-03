import axios from "axios";
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
  DELETE_HEADER_SUCCESS,
  HEADER_DETAILS_FAIL,
  HEADER_DETAILS_REQUEST,
  HEADER_DETAILS_SUCCESS,
  NEW_HEADER_FAIL,
  NEW_HEADER_REQUEST,
  NEW_HEADER_SUCCESS,
  UPDATE_HEADER_FAIL,
  UPDATE_HEADER_REQUEST,
  UPDATE_HEADER_SUCCESS,
} from "../constants/headerConstant";

export const getHeader = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_HEADER_REQUEST });

    const { data } = await axios.get("/api/headers");

    dispatch({
      type: ALL_HEADER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_HEADER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// detail
export const getHeaderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: HEADER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/header/${id}`);

    dispatch({
      type: HEADER_DETAILS_SUCCESS,
      payload: data.header,
    });
  } catch (error) {
    dispatch({
      type: HEADER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Products For Admin
export const getAdminHeader = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_HEADER_REQUEST });

    const { data } = await axios.get("/api/admin/headers");

    dispatch({
      type: ADMIN_HEADER_SUCCESS,
      payload: data.headers,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_HEADER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createHeader = (headerData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_HEADER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/admin/header`, headerData, config);

    dispatch({
      type: NEW_HEADER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_HEADER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deleteHeader = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_HEADER_REQUEST });

    const { data } = await axios.delete(`/api/admin/header/${id}`);

    dispatch({
      type: DELETE_HEADER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_HEADER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Product
export const updateHeader = (id, headerData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HEADER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/admin/header/${id}`,
      headerData,
      config
    );

    dispatch({
      type: UPDATE_HEADER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_HEADER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
