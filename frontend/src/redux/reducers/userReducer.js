const initialState = {
  user: [],
  users: [],
  providers: [],
  errors: [],
  authenticated: false,
  load: false,
};
const userListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD":
      return {
        ...state,
        load: true,
      };
    case "ADD_USER":
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload,
        authenticated: true,
        load: false,
      };
    case "FAILED_TO_ADD":
      return {
        ...state,
        error: payload,
        authenticated: false,
        load: false,
      };
    case "LOGIN":
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        authenticated: true,
        user: payload.user,
      };
    case "GETPROVIDERS":
      return {
        ...state,
        authenticated: true,
        providers: payload,
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((x) => x !== payload),
      };
    case "DELETE_PROVIDER":
      return {
        ...state,
        providers: state.providers.filter((x) => x !== payload),
      };
    case "GETUSERS":
      return {
        ...state,
        authenticated: true,
        users: payload,
      };
    case "FAILED_REQUEST":
      return {
        ...state,
        error: payload,
      };
    case "CURRENT_USER":
      return {
        ...state,
        authenticated: true,
        user: payload,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { ...state, users: {}, authenticated: false };

    default:
      return state;
  }
};
export default userListReducer;
