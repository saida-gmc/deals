const initialState = {
  cartItems: [],
  cartDetails: [],
  cartTotal: 0,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM":
      const existItem = state.cartDetails.find((x) => x._id === payload._id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems,
          cartDetails: state.cartDetails,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
          cartDetails: [
            ...state.cartDetails,
            {
              _id: payload._id,
              description: payload.description,
              pictureURL: payload.pictureURL,
              price: payload.price,
              location: payload.location,
              provider: payload.provider,
              qty: 1,
              status: "registred",
            },
          ],
          cartTotal: state.cartDetails.reduce(
            (acc, payload, qty) => acc + qty * payload.price,
            0
          ),
        };
      }
    case "DECREMENT_QTY":
      return {
        ...state,
        cartDetails: state.cartDetails.map((item) =>
          item._id === payload && item.qty > 1
            ? { ...item, qty: --item.qty }
            : item
        ),
      };
    case "INCREMENT_QTY":
      return {
        ...state,
        cartDetails: state.cartDetails.map((item) =>
          item._id === payload ? { ...item, qty: ++item.qty } : item
        ),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x !== payload),
        cartDetails: state.cartDetails.filter((x) => x !== payload),
        cartTotal: state.cartTotal - payload.price * payload.qty,
        // qty:
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        cartTotal: state.cartDetails.reduce(
          (acc, item) => acc + item.qty * item.price,
          0
        ),
      };
    case "CLEAR_ITEMS":
      return {
        ...state,
        cartItems: [],
        cartDetails: [],
        cartTotal: 0,
      };

    default:
      return state;
  }
};
export default cartReducer;
