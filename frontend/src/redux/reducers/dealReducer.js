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
    case "DEAL_LIST_SUCESS":
      return {
        ...state,
        deals: payload,
        load: false,
      };
    case "DEAL_LIST_FAIL":
      return {
        ...state,
        load: false,
        errors: payload,
      };

    default:
      return {
        state,
      };
  }
};
