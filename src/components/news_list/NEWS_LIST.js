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

  const { loading, error, data } = useSelector((state) => state.productList);

  if (error) {
    toast.error(error, {
      autoClose: false,
    });
  }

  useEffect(() => {
    dispatch(listNews());
  }, [dispatch]);

  return (
    <div className="news-list">
      {loading ? (
        <Spinner />
      ) : error ? (
        <ToastContainer />
      ) : Object.keys(data).length !== 0 ? (
        data.products.map((newsItem) => (
          <NEWS_CARD key={newsItem.id} itemData={newsItem} />
        ))
      ) : null}
    </div>
  );
};

export default NEWS_LIST;
