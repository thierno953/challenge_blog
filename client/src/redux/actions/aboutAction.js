import axios from "axios";
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
  DELETE_ABOUT_SUCCESS,
  NEW_ABOUT_FAIL,
  NEW_ABOUT_REQUEST,
  NEW_ABOUT_SUCCESS,
  UPDATE_ABOUT_FAIL,
  UPDATE_ABOUT_REQUEST,
  UPDATE_ABOUT_SUCCESS,
} from "../constants/aboutConstant";

export const getAbout = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ABOUT_REQUEST });

    const { data } = await axios.get("/api/abouts");

    dispatch({
      type: ALL_ABOUT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ABOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// detail
export const getAboutDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ABOUT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/about/${id}`);

    dispatch({
      type: ABOUT_DETAILS_SUCCESS,
      payload: data.about,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Products For Admin
export const getAdminAbout = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_ABOUT_REQUEST });

    const { data } = await axios.get("/api/admin/abouts");

    dispatch({
      type: ADMIN_ABOUT_SUCCESS,
      payload: data.abouts,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_ABOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createAbout = (aboutData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ABOUT_REQUEST });

    const config = {
      abouts: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/admin/about`, aboutData, config);

    dispatch({
      type: NEW_ABOUT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_ABOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deleteAbout = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ABOUT_REQUEST });

    const { data } = await axios.delete(`/api/admin/about/${id}`);

    dispatch({
      type: DELETE_ABOUT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ABOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Product
export const updateAbout = (id, aboutData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ABOUT_REQUEST });

    const config = {
      abouts: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/admin/about/${id}`,
      aboutData,
      config
    );

    dispatch({
      type: UPDATE_ABOUT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ABOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
