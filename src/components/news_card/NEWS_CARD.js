import React from "react";
import "../../style/components/_news_card.scss";
import { useNavigate } from "react-router-dom";

const NEWS_CARD = (props) => {

  const navigate = useNavigate();



  return (
    <div className="newsCard">
      <div className="image-container">
        <img className="product-image" src={props.itemData.thumbnail} />
      </div>
      <div className="product-info">
        <h1 className="product-title">{props.itemData.title}</h1>
        <p className="product-description">{props.itemData.description}</p>
        <p className="product-price">{props.itemData.price} $</p>
      </div>
      <div className="details-btn" onClick={() => navigate(`/product/${props.itemData.id}`)}>View Details</div>
    </div>
  );
};

export default NEWS_CARD;
