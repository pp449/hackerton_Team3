import React, { useState } from 'react';
import SearchMenu from './SearchMenu';
import { Link } from 'react-router-dom';

const months = [
    {
      id: null,
      name: '개최 월',
    },
    {
      id: 'JAN',
      name: '1월',
    },
    {
      id: 'FEB',
      name: '2월',
    },
    {
      id: 'MAY',
      name: '3월',
    },
    {
      id: 'APR',
      name: '4월',
    },
    {
      id: 'MAY',
      name: '5월',
    },
    {
      id: 'JUN',
      name: '6월',
    },
    {
      id: 'JUL',
      name: '7월',
    },
    {
      id: 'AUG',
      name: '8월',
    },
    {
      id: 'SEP',
      name: '9월',
    },
    {
      id: 'OCT',
      name: '10월',
    },
    {
      id: 'NOV',
      name: '11월',
    },
    {
      id: 'DEC',
      name: '12월',
    },
]

const areas = [
    {
        id: 1,
        name: '개최 지역',
    },
    {
        id:2,
        name:"부산진구"
    },
    {
        id:3,
        name:"북구"
    },
    {
        id:4,
        name:"금정구"
    },
]

const frees = [
    {
        id:null,
        name:"유/무료"
    },
    {
        id:false,
        name:"유료"
    },
    {
        id:true,
        name:"무료"
    },
]


function Searchpagetmp() {
    const [month, setMonth] = useState();
    const [area, setArea] = useState();
    const [free, setFree] =useState();

    return(
        <div className="relative pt-36 pb-36 w-full bg-festivalImg opacity-80 text-center bg-cover table snap-start">
            <div className="table-cell align-middle ">
                <div className="text-8xl text-white font-GoogleFont pb-14 font-thin">passtival에서<br/>원하는 축제를<br/>찾아보세요</div>
                <div className="flex justify-center m-auto mt-50">
                    <SearchMenu value={months} set={setMonth}/>
                    <SearchMenu value={areas} set={setArea}/>
                    <SearchMenu value={frees} set={setFree}/>
                    <div className="inline-flex rounded-md">
                        <a
                        href={'/search?is-free='+free+'&month='+month+'&city='+area}
                         className="mt-0.5 h-10 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black hover:opacity-90 bg-blue-400"
                         >
                         검색
                         </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchpagetmp;