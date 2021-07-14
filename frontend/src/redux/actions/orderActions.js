import axios from "axios";

export const addOrder = (cartItems) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.post(`/api/confirm/`, cartItems, config);
    console.log(result.data);

    dispatch({
      type: "CREATE_ORDER_SUCCESS",
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: "CREATE_ORDER_FAILED",
      payload: error.response,
    });
  }
};

export const getOrder = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get(`/api/confirm/all`, config);
    dispatch({
      type: "GET_ORDER",
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: "CREATE_ORDER_FAILED",
      payload: error.response,
    });
  }
};
export const getOrderByID = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get(`/api/confirm/all/${id}`, config);
    console.log("order");
    dispatch({
      type: "GET_ORDER",
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: "CREATE_ORDER_FAILED",
      payload: error.response,
    });
  }
};
