import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home/Home';
import Search from "./component/search/Search";
import Header from "./component/common/Header/Header";

function App() {
  return ( 
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
