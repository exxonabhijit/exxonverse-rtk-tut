import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../store/cart.slice";
import { fetchPosts, fetchProducts } from "../store/product.slice";
import { STATUSES } from "../store/product.slice";

const ProductCard = () => {
  const {
    data: products,
    status,
  } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    //1. common method to fetch data
    // const FetchProducts = async () => {
    //   try {
    //     await axios.get("https://fakestoreapi.com/products").then((res) => {
    //       setProducts(res?.data);
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // FetchProducts();

    //1.fetch data using Thunk
    dispatch(fetchProducts());
    dispatch(fetchPosts());
  }, []);

  const handleAdd = (product) => {
    dispatch(AddToCart(product));
  };

  if (status == STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status == STATUSES.ERROR) {
    return <h2>Error..</h2>;
  }

  return (
    <>
      {products.map((product) => (
        <div className="col-12 col-sm-12 col-md-4 col-lg-3" key={product.id}>
          <div className="card m-3">
            <img
              src={product.image}
              className="card-img-top"
              alt="image"
              style={{ height: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="text-danger fw-bold">₹ {product.price}</p>
              <button
                className="btn btn-primary fw-bold"
                onClick={() => handleAdd(product)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
