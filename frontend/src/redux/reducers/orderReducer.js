const initialState = {
  order: [],
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CREATE_ORDER_SUCCESS":
      return {
        ...state,
        order: payload,
      };
    case "CREATE_ORDER_FAIL":
      return {
        ...state,
        error: payload,
      };
    case "GET_ORDER":
      return {
        ...state,
        order: payload,
      };
    case "GET_ORDER_FAIL":
      return {
        ...state,
        error: payload,
      };
    case "UPDATE_ORDER":
      const existOrder = state.order.find((el) => el._id === payload._id);
      return {
        ...state,
        order: state.order.map((el) =>
          el._id === existOrder._id ? payload : el
        ),
      };

    default:
      return state;
  }
};
