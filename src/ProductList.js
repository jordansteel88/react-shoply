import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcons from "./CartIcons";

function ProductList() {
  const products = useSelector(st => st.products);
  const productCards = Object.keys(products).map(id => (
    <div className="col-md-3 mb-3" key={id}>
      <div className="card">
        <div className="card-body bg-muted">
          <h2 className="card-title text-center">
            <Link to={`/products/${id}`}>{products[id].name}</Link>
          </h2>
          <CartIcons id={id} />
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <h4 className="my-5 text-primary">Just look at all this junk!!</h4>
      <div className="row">{productCards}</div>
    </div>
  );
}

export default ProductList;