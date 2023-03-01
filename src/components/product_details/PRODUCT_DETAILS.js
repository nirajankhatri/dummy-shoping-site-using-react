import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productDetails } from "../../redux/productActions";
import uuid from "react-uuid";

const PRODUCT_DETAILS = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const productData = useSelector((state) => state.productDetails);
  const { loading, error, data } = productData;

  const productDetailsContainer = loading ? (
    <h1>loading</h1>
  ) : error ? (
    <h1>error</h1>
  ) : (
    <div className="product-details">
      <div className="product-img-container">
        {data.images.map((imgUrl) => (
          <img key={uuid()} className="product-img" src={imgUrl} />
        ))}
      </div>
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>{data.price} <span>{data.discountPercentage}</span></p>
      </div>
    </div>
  );

  useEffect(() => {
    dispatch(productDetails(id));
  }, [id]);

  return <div>{productDetailsContainer}</div>;
};

export default PRODUCT_DETAILS;
