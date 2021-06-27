import axios from "axios";

export const listDeals = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD" });
    const result = await axios.get("/api/deals");
    console.log(result);
    dispatch({
      type: "DEAL_LIST_SUCESS",
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: "DEAL_LIST_FAIL",
      payload: error.response.data.errors,
    });
  }
};
