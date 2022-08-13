import React, { useState, useEffect } from 'react';
import DetailpageTop from './DetailpageTop';
import DetailpageBottom from './DetailpageBottom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Detailpage() {
    const [post, setPost] = useState([]);
    const param = useParams();

    useEffect(() => {
        axios.get(`http://43.200.163.136:8080/api/festival/${param.id}`).then(response => {
            setPost(response.data.data);
        })
    }, [])
    return(
        <div className="px-52">
            <DetailpageTop post={post}/>
            <DetailpageBottom post={post}/>
        </div>
    )
}

export default Detailpage;