import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart } from "../store/cart.slice";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [total, setTotal] = useState(0)
  const handleRemove = (data) => {
    dispatch(RemoveFromCart(data));
  };

  return (
    <>
      <div className="Cart">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 col-sm-12 col-lg-6">
              {products.map((product) => (
                <div className="card mb-3" key={product.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product.image}
                        className="img-fluid rounded-start"
                        alt="product-image"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">{product.price}</p>
                      </div>
                      <div className="card-footer">
                        <div className="d-flex mb-3">
                          <button
                            className="btn btn-primary me-2"
                            onClick={() => AddQuantity()}
                          >
                            Add
                          </button>
                          <button
                            className="btn btn-dark"
                            onClick={() => MinQuantity()}
                          >
                            Min
                          </button>
                        </div>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemove(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <h3 className="text-red fw-bold">Subtotal: ₹ 300</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
