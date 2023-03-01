import React from "react";
import {Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import NEWS_LIST from "./components/news_list/NEWS_LIST";
import PRODUCT_DETAILS from "./components/product_details/PRODUCT_DETAILS";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<NEWS_LIST />} />
          <Route  path="/product/:id" element={<PRODUCT_DETAILS />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
