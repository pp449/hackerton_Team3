import DetailpageTop from './DetailpageTop';
import DetailpageBottom from './DetailpageBottom';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Detailpage() {
    const { id } = useParams();
    let [detailData, SetdetailData] = useState([]);

    useEffect(() => {
        axios.get('http://43.200.163.136:8080/api/festival/'+id)
          .then((result)=>{
            SetdetailData(result.data.data);
          })
      },[]);

    return(
        <div className="px-52 my-11">
            <DetailpageTop value={detailData}/>
            <DetailpageBottom value={detailData}/>
        </div>
    )
}

export default Detailpage;