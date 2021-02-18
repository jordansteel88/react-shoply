import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartIcons from "./CartIcons";

const Cart = () => {
  // const dispatch = useDispatch();

  const {
    products,
    cartItems,
    cartValue
  } = useSelector(store => store);

  const renderCart = () => {
    const rows = Object.keys(cartItems).map(id => (
      <tr key={id}>
        <td>
          <Link to={`/products/${id}`}>{products[id].name}</Link>
        </td>
        <td>${products[id].price}</td>
        <td>{cartItems[id]}</td>
        <td><CartIcons id={id} /></td>
      </tr>
    ));

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };

  return cartItems.length === 0 ? (
    <h2>No items in cart yet!</h2>
  ) : (
    <div>
      {renderCart()}
      <p>
        Total: ${cartValue}
        {/* {discountApplied ? (
          <span className="text-success">
            - You saved {(discountAmount * 100).toFixed(0)}%!
          </span>
        ) : null} */}
      </p>

      {/* <form onSubmit={handleDiscount} className="form-inline">
        <label htmlFor="discount">Discount:</label>
        <input
          id="discount"
          value={discount}
          onChange={handleChange}
          name="discount"
          type="text"
          className="form-control ml-2 mr-2"
        />
        <button className="btn btn-primary">Apply Discount</button>
      </form> */}
    </div>
  );
}

export default Cart;
