import DetailpageTop from './DetailpageTop';
import DetailpageBottom from './DetailpageBottom';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Detailpage() {
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://43.200.163.136:8080/api/festival/'+id)
          .then((result)=>{
            console.log(result.data.data);
          })
      },[]);

    return(
        <div className="px-52">
            <DetailpageTop/>
            <DetailpageBottom/>
        </div>
    )
}

export default Detailpage;