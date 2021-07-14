import axios from "axios";

export const register = (newUser, history) => async (dispatch) => {
  try {
    const result = await axios.post("/api/users/register", newUser);
    console.log(result.data);
    const id = result.data.user._id;
    console.log(result.data.user.role);
    dispatch({
      type: "ADD_USER",
      payload: result.data,
    });
    if (result.data.user.role === "admin") {
      return history.push(`/admin-profile/${id}`);
    } else if (result.data.user.role === "provider") {
      return history.push(`/provider-profile/${id}`);
    } else {
      return history.push(`/user-profile/${id}`);
    }
  } catch (error) {
    dispatch({
      type: "FAILED_TO_ADD",
      payload: error,
    });
  }
};
export const getusers = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get(
      "/api/users/admin-profile/:id/allusers",
      config
    );
    console.log(result.data);
    dispatch({
      type: "GETUSERS",
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: "FAILED_REQUEST",
      payload: error,
    });
  }
};
//delete user
export const deleteuser = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.delete(`/api/users/admin-profile/users/${id}`, config);
    console.log(id);
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
    dispatch(getusers());
  } catch (error) {
    dispatch({
      type: "FAILED_REQUEST",
      payload: error,
    });
  }
};
export const deleteprovider = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.delete(`/api/users/admin-profile/providers/${id}`, config);
    dispatch({
      type: "DELETE_PROVIDER",
      payload: id,
    });
    dispatch(getproviders());
  } catch (error) {
    dispatch({
      type: "FAILED_REQUEST",
      payload: error,
    });
  }
};

export const editUser = (id, newUser) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.put(`/api/users/user-profile/${id}`, newUser, config);
    dispatch(current());
  } catch (error) {
    dispatch({ type: "FAILED_REQUEST", payload: error });
    console.log(error);
  }
};
export const editProvider = (id, newUser) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.put(`/api/users/provider-profile/${id}`, newUser, config);
    dispatch(current());
  } catch (error) {
    dispatch({ type: "FAILED_REQUEST", payload: error });
    console.log(error);
  }
};

export const getproviders = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get(
      "/api/users/admin-profile/:id/allproviders",
      config
    );
    console.log(result.data);
    dispatch({
      type: "GETPROVIDERS",
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: "FAILED_REQUEST",
      payload: error,
    });
  }
};

export const login = (user, history) => async (dispatch) => {
  try {
    const result = await axios.post("/api/users/login", user);
    console.log(result.data);
    const id = result.data.user._id;

    dispatch({
      type: "LOGIN",
      payload: result.data,
    });
    if (result.data.user.role === "admin") {
      return history.push(`/admin-profile/${id}`);
    } else if (result.data.user.role === "provider") {
      return history.push(`/provider-profile/${id}`);
    } else {
      return history.push(`/user-profile/${id}`);
    }
  } catch (error) {
    dispatch({
      type: "FAILED_TO_ADD",
      payload: error,
    });
  }
};

export const current = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get("/api/users/current", config);
    console.log(result.data);
    dispatch({
      type: "CURRENT_USER",
      payload: result.data.user,
    });
  } catch (error) {
    dispatch({
      type: "FAILED_TO_ADD",
      payload: error.response,
    });
  }
};
export const logout = () => ({
  type: "LOGOUT",
});
