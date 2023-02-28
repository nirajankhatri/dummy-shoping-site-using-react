import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import NEWS_LIST from "./components/news_list/NEWS_LIST";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <NEWS_LIST />
    </div>
  );
}

export default App;
