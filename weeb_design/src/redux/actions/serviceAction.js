import axios from "axios";
import {
  ADMIN_SERVICE_FAIL,
  ADMIN_SERVICE_REQUEST,
  ADMIN_SERVICE_SUCCESS,
  ALL_SERVICE_FAIL,
  ALL_SERVICE_REQUEST,
  ALL_SERVICE_SUCCESS,
  CLEAR_ERRORS,
  DELETE_SERVICE_FAIL,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_SUCCESS,
  NEW_SERVICE_FAIL,
  NEW_SERVICE_REQUEST,
  NEW_SERVICE_SUCCESS,
  SERVICE_DETAILS_FAIL,
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
  UPDATE_SERVICE_FAIL,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
} from "../constants/serviceConstant";

export const getService = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SERVICE_REQUEST });

    const { data } = await axios.get("/api/services");

    dispatch({
      type: ALL_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// detail
export const getServiceDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/service/${id}`);

    dispatch({
      type: SERVICE_DETAILS_SUCCESS,
      payload: data.service,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Products For Admin
export const getAdminService = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_SERVICE_REQUEST });

    const { data } = await axios.get("/api/admin/services");

    dispatch({
      type: ADMIN_SERVICE_SUCCESS,
      payload: data.services,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createService = (serviceData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_SERVICE_REQUEST });

    const config = {
      services: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/admin/service`,
      serviceData,
      config
    );

    dispatch({
      type: NEW_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deleteService = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SERVICE_REQUEST });

    const { data } = await axios.delete(`/api/admin/service/${id}`);

    dispatch({
      type: DELETE_SERVICE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Product
export const updateService = (id, serviceData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SERVICE_REQUEST });

    const config = {
      services: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/admin/service/${id}`,
      serviceData,
      config
    );

    dispatch({
      type: UPDATE_SERVICE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
