import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios.get('http://localhost:3001/api/feed')
        .then(res => setPosts(res.data))
        .catch(err => console.error(err));
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-2xl shadow p-4">
          <img src={post.imageUrl} alt="Post" className="rounded-xl mb-2" />
          <h3 className="text-lg font-bold">{post.authorName}</h3>
          <p className="text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;