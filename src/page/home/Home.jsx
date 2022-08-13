import React from 'react';
import Footer from '../../component/common/Footer/Footer';
import axios from 'axios';
import Sectionpage from '../../component/sectionpage/Sectionpage';
import Header from '../../component/common/Header/Header';
import Searchpage from "../../component/searchpage/Searchpage";
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className='text-center'>
        <Header />
        <div className="scroll-smooth h-screen snap-y overflow-x-scroll snap-mandatory">
          <Searchpage />
          <Sectionpage title="현재 진행중인 축제" add="http://43.200.163.136:8080/api/festival/main?status=START" />
          <Sectionpage title="곧 진행될 축제" add="http://43.200.163.136:8080/api/festival/main?status=GOING" />
          <Sectionpage title="추천 축제" add="http://43.200.163.136:8080/api/festival/pick"/>
          <button className='rounded-xl bg-blue-400 w-40 h-10 mb-14 hover:opacity-60'>
            <Link to="/search">
              모든 축제보기
            </Link>
          </button>
          <Footer />
        </div>
      </div>
    )
}

export default Home;