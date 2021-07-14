import axios from "axios";
import { GET_DEALS_SUCCESS, GET_DEALS_FAILED } from "./actionTypes";

export const listDeals = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD" });
    const result = await axios.get("/api/deals");

    dispatch({
      type: GET_DEALS_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DEALS_FAILED,
      payload: error.response,
    });
  }
};
export const dealDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "LOAD" });
    const result = await axios.get(`/api/deals/${id}`);

    dispatch({
      type: "GET_DETAILS_SUCCESS",
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_DETAILS_FAILED",
      payload: error.response,
    });
  }
};

export const deleteDeal = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.delete(`/api/deals/${id}`, config);
    dispatch(listDeals());
    console.log("le deal est supprimé");
  } catch (error) {
    dispatch({ type: GET_DEALS_FAILED, payload: error });
    console.log(error);
  }
};
export const editDeal = (id, newDeal) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.put(`/api/deals/${id}`, newDeal, config);
    dispatch(dealDetails(id));
  } catch (error) {
    dispatch({ type: GET_DEALS_FAILED, payload: error });
    console.log(error);
  }
};
export const addDeal = (newDeal) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.post("/api/deals/", newDeal, config);
    dispatch(listDeals());
  } catch (error) {
    dispatch({ type: GET_DEALS_FAILED, payload: error });
    console.log(error);
  }
};
