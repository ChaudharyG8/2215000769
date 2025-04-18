import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/trending-posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-2xl shadow p-4">
          <img src={post.imageUrl} alt="Post" className="rounded-xl mb-2" />
          <p className="text-lg font-semibold mb-2">{post.content}</p>
          <p className="text-gray-500">Comments: {post.commentCount}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;