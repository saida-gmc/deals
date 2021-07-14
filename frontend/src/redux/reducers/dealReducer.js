const initialState = {
  deals: [],
  errors: [],
  load: false,
};
export const dealListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD":
      return {
        ...state,
        load: true,
      };
    case "GET_DEALS_SUCCESS":
      return {
        ...state,
        deals: payload,
        load: false,
      };
    case "GET_DEALS_FAILED":
      return {
        ...state,
        load: false,
        errors: payload,
      };

    default:
      return state;
  }
};

export const dealDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD":
      return {
        ...state,
        load: true,
      };
    case "GET_DETAILS_SUCCESS":
      return {
        ...state,
        deals: payload,
        load: false,
      };
    case "GET_DETAILS_FAILED":
      return {
        ...state,
        load: false,
        errors: payload,
      };

    default:
      return state;
  }
};
