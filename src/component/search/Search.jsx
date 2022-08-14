import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Search() {
    const [posts, setPosts] = useState([]);

    const URL = window.location.href.split('localhost:3000/')[1];

    useEffect(() => {
        axios.get('http://43.200.163.136:8080/api/festival/'+URL).then(response => {
            console.log(response.data.data);
            setPosts(response.data.data);
        });
    }, []);

    return (
        <div className='relative flex justify-center mt-40 w-screen text-center'>
            <div className='text-xl font-bold text-center'>
                검색 결과 !
            </div>
            <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {posts.map((post) => (
            console.log(post),
            <a key={post.id} href={'/post/'+post.festivalId} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={post.imgUrl}
                  alt={post.imgUrl}
                  className="w-full h-96 object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{post.festivalName}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
        </div>
    )
}

export default Search;