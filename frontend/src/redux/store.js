import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { dealDetailsReducer, dealListReducer } from "./reducers/dealReducer";
import userListReducer from "./reducers/userReducer";
import cartReducer from "./reducers/commandReducer";
import { orderReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
  dealList: dealListReducer,
  dealDetails: dealDetailsReducer,
  userList: userListReducer,
  cart: cartReducer,
  orderList: orderReducer,
});
const middleware = [thunk];
export const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import  dealListReducer  from "../redux/reducers/dealReducer";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//   dealListReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );
