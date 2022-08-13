import SearchMenu from './SearchMenu';

const month = [
    {
      id: 1,
      name: '개최 월',
    },
    {
      id: 2,
      name: '1월',
    },
    {
      id: 3,
      name: '2월',
    },
    {
      id: 4,
      name: '3월',
    },
    {
      id: 5,
      name: '4월',
    },
    {
      id: 6,
      name: '5월',
    },
    {
      id: 7,
      name: '6월',
    },
    {
      id: 8,
      name: '7월',
    },
    {
      id: 9,
      name: '8월',
    },
    {
      id: 10,
      name: '9월',
    },
    {
      id: 11,
      name: '10월',
    },
    {
      id: 12,
      name: '11월',
    },
    {
      id: 13,
      name: '12월',
    },
]

const area = [
  {
    name: '개최 지역',
  },
  {
    name:"부산진구"
  },
  {
    name:"북구"
  },
  {
    name:"금정구"
  },
  {
    name:"기장군"
  },
  {
    name:"동래구"
  },
  {
    name:"연제구"
  },
  {
    name:"사상구"
  },
  {
    name:"동구"
  },
  {
    name:"남구"
  },
  {
    name:"서구"
  },
  {
    name:"중구"
  },
  {
    name:"영도구"
  },
  {
    name:"사하구"
  },
  {
    name:"강서구"
  },
  {
    name:"해운대구"
  },
  {
    name:"수영구"
  },
]

const free = [
    {
        id:1,
        name:"유/무료"
    },
    {
        id:2,
        name:"유료"
    },
    {
        id:3,
        name:"무료"
    },
]

function Searchpagetmp() {
    return(
        <div className="relative pt-36 pb-36 w-full bg-festivalImg opacity-80 text-center bg-cover table snap-start">
            <div className="table-cell align-middle ">
                <div className="text-8xl text-white font-GoogleFont3 font-thin pb-14 font-thin">passtival에서<br/>원하는 축제를<br/>찾아보세요</div>
                <div className="flex justify-center m-auto mt-50">
                    <SearchMenu value={month}/>
                    <SearchMenu value={area}/>
                    <SearchMenu value={free}/>
                    <div className="inline-flex rounded-md">
                        <a
                        href="#"
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