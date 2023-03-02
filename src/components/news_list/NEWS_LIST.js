import React, { useEffect } from "react";
import { listNews } from "../../redux/productActions";
import { useDispatch, useSelector } from "react-redux";
import NEWS_CARD from "../news_card/NEWS_CARD";
import "../../style/components/_news_card_list.scss";
import Spinner from "../spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NEWS_LIST = () => {
  const dispatch = useDispatch();

  const newsList = useSelector((state) => state.productList);
  const { loading, error, data } = newsList;

  let newsItems = [];

  if (error) {
    toast.error(error, {
      autoClose: false,
    });
  }

  newsItems = loading ? (
    <Spinner />
  ) : error ? (
    <ToastContainer />
  ) : (
    <>
      {data.products.map((newsItem) => (
        <NEWS_CARD key={newsItem.id} itemData={newsItem} />
      ))}
    </>
  );

  useEffect(() => {
    dispatch(listNews());
  }, []);
  return <div className="news-list">{newsItems}</div>;
};

export default NEWS_LIST;
