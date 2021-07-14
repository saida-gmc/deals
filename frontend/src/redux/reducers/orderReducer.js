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

    default:
      return state;
  }
};
