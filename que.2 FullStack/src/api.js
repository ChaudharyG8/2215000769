// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Sample in-memory data
let users = [
  { id: 1, name: 'Harshit', postCount: 15, imageUrl: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Tanisha', postCount: 25, imageUrl: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Soniya', postCount: 5, imageUrl: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, name: 'Uday', postCount: 30, imageUrl: 'https://i.pravatar.cc/150?img=4' },
  { id: 5, name: 'Karishma', postCount: 20, imageUrl: 'https://i.pravatar.cc/150?img=5' },
  { id: 6, name: 'Barua', postCount: 10, imageUrl: 'https://i.pravatar.cc/150?img=6' },
];

let posts = [
  {
    id: 101,
    authorId: 1,
    authorName: 'Harshit',
    content: 'Loving the new features in our app! 🌟',
    commentCount: 12,
    imageUrl: 'https://source.unsplash.com/random/400x200?sig=1'
  },
  {
    id: 102,
    authorId: 2,
    authorName: 'Tanisha',
    content: 'Here’s a sneak peek of our upcoming UI revamp. 🚀',
    commentCount: 24,
    imageUrl: 'https://source.unsplash.com/random/400x200?sig=2'
  },
  {
    id: 103,
    authorId: 4,
    authorName: 'Uday',
    content: 'Attending ReactConf this year! So excited! 🎉',
    commentCount: 24,
    imageUrl: 'https://source.unsplash.com/random/400x200?sig=3'
  },
  {
    id: 104,
    authorId: 5,
    authorName: 'Karishma',
    content: 'Working on backend APIs today.',
    commentCount: 8,
    imageUrl: 'https://source.unsplash.com/random/400x200?sig=4'
  },
];

// Route: GET /api/top-users
app.get('/api/top-users', (req, res) => {
  const sorted = [...users].sort((a, b) => b.postCount - a.postCount);
  res.json(sorted.slice(0, 5));
});

// Route: GET /api/trending-posts
app.get('/api/trending-posts', (req, res) => {
  const maxComments = Math.max(...posts.map(p => p.commentCount));
  const trending = posts.filter(p => p.commentCount === maxComments);
  res.json(trending);
});

// Route: GET /api/feed
app.get('/api/feed', (req, res) => {
  const sorted = [...posts].sort((a, b) => b.id - a.id);
  res.json(sorted);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});