import React, { useState } from 'react';
import SearchMenu from './SearchMenu';
import { Link } from 'react-router-dom';

const months = [
    {
      id: "none",
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
    id: "none",
    name: '개최 지역',
  },
  {
    id: 'BUK_GU',
    name:"북구"
  },
  {
    id: 'GEUMJEONG_GU',
    name:"금정구"
  },
  {
    id: 'GIJANG_GU',
    name:"기장군"
  },
  {
    id: 'DONGNAE_GU',
    name:"동래구"
  },
  {
    id: 'YEONJE_GU',
    name:"연제구"
  },
  {
    id: 'SASANG_GU',
    name:"사상구"
  },
  {
    id: 'DONG_GU',
    name:"동구"
  },
  {
    id: 'NAM_GU',
    name:"남구"
  },
  {
    id: 'SEO_GU',
    name:"서구"
  },
  {
    id: 'JUNG_GU',
    name:"중구"
  },
  {
    id: 'YEONGDO_GU',
    name:"영도구"
  },
  {
    id: 'SAHA_GU',
    name:"사하구"
  },
  {
    id: 'GANGSEO_GU',
    name:"강서구"
  },
  {
    id: 'HAEUNDAE_GU',
    name:"해운대구"
  },
  {
    id: 'SUYEONG_GU',
    name:"수영구"
  },
]

const frees = [
    {
        id:"none",
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
    const [month, setMonth] = useState('none');
    const [area, setArea] = useState('none');
    const [free, setFree] =useState('none');

    return(
        <div className="relative pt-36 pb-36 w-full bg-festivalImg opacity-80 text-center bg-cover table snap-start">
            <div className="table-cell align-middle ">
                <div className="text-8xl text-white font-GoogleFont3 font-thin pb-14 font-thin">passtival에서<br/>원하는 축제를<br/>찾아보세요</div>
                <div className="flex justify-center m-auto mt-50">
                    <SearchMenu value={months} set={setMonth}/>
                    <SearchMenu value={areas} set={setArea}/>
                    <SearchMenu value={frees} set={setFree}/>
                    <div className="inline-flex rounded-md">
                        <Link
                        to={'/search?is-free='+free+'&month='+month+'&city='+area}
                         className="mt-0.5 h-10 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black hover:opacity-90 bg-blue-400"
                         >
                         검색
                         </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchpagetmp;