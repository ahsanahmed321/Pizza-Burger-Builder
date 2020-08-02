const initialState = {
  order: [],
  delOrder: []
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      order: [...state.order, action.order]
    };
  }

  if (action.type === "DELETE_FROM_CART") {
    return {
      delOrder: state.order.splice(action.value, 1)
    };
  }

  return state;
};

export default reducer;
