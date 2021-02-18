import { ADD, REMOVE } from "./actionTypes";

export function addToCart(id) {
  return {
    type: ADD,
    id
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE,
    id
  };
}