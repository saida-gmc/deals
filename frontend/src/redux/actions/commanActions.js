export const updatePrice = () => {
  return {
    type: "UPDATE_PRICE",
  };
};
export const addToCart = (item) => {
  return {
    type: "ADD_ITEM",
    payload: {
      _id: item._id,
      description: item.description,
      pictureURL: item.pictureURL,
      price: item.price,
      provider: item.provider,
      qty: 1,
    },
  };
};
export const removeFromCart = (item) => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};
export const clearCart = () => {
  return {
    type: "CLEAR_ITEMS",
  };
};

export const decrement = (id) => (dispatch) => {
  dispatch({
    type: "DECREMENT_QTY",
    payload: id,
  });
  dispatch(updatePrice());
};
export const increment = (id) => (dispatch) => {
  dispatch({
    type: "INCREMENT_QTY",
    payload: id,
  });
  dispatch(updatePrice());
};
