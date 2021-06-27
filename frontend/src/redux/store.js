import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { dealListReducer } from "./reducers/dealReducer";
const reducer = combineReducers({
  dealList: dealListReducer,
});
const initialState = {};
const middleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
// <Link to={`/deal/${deal._id}`}>More details</Link>
