import data from "./data.json";
import { ADD, REMOVE } from "./actionTypes";

const INITIAL_STATE = {
  products: data.products,
  cartItems: {},
  cartValue: 0.0
};

const cartTotal = (items, cart) => {
  let total = 0;
  for (let id in items) {
    const { price } = items[id];
    const quantity = cart[id] || 0;
    total += price * quantity;
  }
  return total;
}

const rootReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD: {
      const cartCopy = { ...state.cartItems };
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;

      return {
        ...state,
        cartItems: cartCopy,
        cartValue: cartTotal(state.products, cartCopy)
      }
    }

    case REMOVE: {
      const cartCopy = { ...state.cartItems };
      
      if (!cartCopy[action.id]) return state;

      cartCopy[action.id]--;
      if (cartCopy[action.id] === 0) delete cartCopy[action.id];

      return {
        ...state,
        cartItems: cartCopy,
        cartValue: cartTotal(state.products, cartCopy)
      };
    }

    default: 
      return state;
  }
}

export default rootReducer;