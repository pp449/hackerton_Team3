import React from 'react';
import Footer from '../../component/common/Footer/Footer';
import Sectionpage from '../../component/sectionpage/Sectionpage';

function Home() {
    return (
      <div className='text-center'>
        <div className="scroll-smooth h-screen snap-y overflow-x-scroll snap-mandatory">
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