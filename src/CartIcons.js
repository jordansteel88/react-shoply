import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";

function CartIcons({ id }) {
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));
  const remove = () => dispatch(removeFromCart(id));

  return (
    <div className="d-flex justify-content-between">
      <button className="btn btn-primary" onClick={remove}>-</button>
      <button className="btn btn-primary" onClick={add}>+</button>
    </div>
  );
}

export default CartIcons;