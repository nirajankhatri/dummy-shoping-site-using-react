import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productDetails } from "../../redux/productActions";
import uuid from "react-uuid";
import "../../style/components/_product_details.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../spinner/Spinner";

const PRODUCT_DETAILS = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const productData = useSelector((state) => state.productDetails);
  const { loading, error, data } = productData;

  if (error) {
    toast.error(error, {
      autoClose: false,
    });
  }

  useEffect(() => {
    dispatch(productDetails(id));
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ToastContainer />
      ) : Object.keys(data).length !== 0 ? (
        <div className="product-details">
          <div className="product-img-container">
            {data.images.slice(0, 4).map((imgUrl) => (
              <img key={uuid()} className="product-img" src={imgUrl} />
            ))}
          </div>
          <div className="product-description-container">
            <h1 className="product-title">{data.title}</h1>
            <p className="product-description">{data.description}</p>
            <p className="product-pricing">
              ${data.price}
              <span className="pricing-discount">
                {data.discountPercentage}% Discount
              </span>
            </p>
            <p className="product-stock">
              Only <span className="stock">{data.stock}</span> in stock
            </p>
            <div className="product-btns">
              <button className="product-btn cart-button">Add to Cart</button>
              <button className="product-btn buy-btn">Buy</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PRODUCT_DETAILS;
