import React, { useEffect } from "react";
import { listNews } from "../../redux/productActions";
import { useDispatch, useSelector } from "react-redux";
import NEWS_CARD from "../news_card/NEWS_CARD";
import '../../style/components/_news_card_list.scss'

const NEWS_LIST = () => {
  const dispatch = useDispatch();

  const newsList = useSelector((state) => state.productList);
  const { loading, error, data } = newsList;

  let newsItems = [];

  if (data.products !== undefined && data.products !== null) {
    newsItems = data.products.map((newsItem) => (
      <NEWS_CARD key={newsItem.id} itemData={newsItem} />
    ));
  }

  useEffect(() => {
    dispatch(listNews());
  }, []);
  return <div className="news-list">{newsItems}</div>;
};

export default NEWS_LIST;
