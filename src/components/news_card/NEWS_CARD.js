import React from "react";
import "../../style/components/_news_card.scss";

const NEWS_CARD = (props) => {
  return (
    <div className="newsCard">
      <div className="image-container">
        <img className="product-image" src={props.itemData.images[0]} />
      </div>
      <div className="product-info">
        <h1 className="product-title">{props.itemData.title}</h1>
        <p className="product-description">{props.itemData.description}</p>
        <p className="product-price">{props.itemData.price} $</p>
      </div>
    </div>
  );
};

export default NEWS_CARD;
