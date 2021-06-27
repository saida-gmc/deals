const initialState = {
  users: [],
  errors: [],
  authenticated: false,
  load: false,
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD":
      return {
        ...state,
        load: true,
      };
    case "ADD_USER":
      return {
        ...state,
        users: payload.user,
        authenticated: true,
        load: false,
      };
    case "LOGIN":
      localStorage.serItetem("token,payload.token");
      return {
        ...state,
        authenticated: true,
        users: payload.user,
      };
    case "CURRENT_USER":
      localStorage.serItetem("token,payload.token");
      return {
        ...state,
        authenticated: true,
        users: payload,
      };
    default:
      return state;
  }
};
