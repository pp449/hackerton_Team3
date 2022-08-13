import React from 'react';
import Footer from '../../component/common/Footer/Footer';
import Header from '../../component/common/Header/Header';
import Sectionpage from '../../component/sectionpage/Sectionpage';
import Searchpage from '../../component/searchpage/Searchpage';

function Home() {
    return (
      <div className='text-center'>
        <Header />
        <div className="scroll-smooth h-screen snap-y overflow-x-scroll snap-mandatory">
          <Searchpage />
          <Sectionpage title="현재 진행중인 축제" />
          <Sectionpage title="곧 진행될 축제" />
          <Sectionpage title="추천 축제" />
          <button className='rounded-xl bg-blue-400 w-40 h-10 mb-14 hover:opacity-60'>
            모든 축제보기
          </button>
          <Footer />
        </div>
      </div>
    )
}

export default Home;