import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home/Home';
import Search from "./component/search/Search";
import Header from "./component/common/Header/Header";
import Detailpage from "./component/detailpage/Detailpage";

function App() {
  return ( 
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post/:id" element={<Detailpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
