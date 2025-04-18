const express = require('express');
const cors = require('cors');
const { users, posts, comments } = require('./mockData');

const app = express();
const PORT = 3000;

app.use(cors());

// GET /users - Top 5 users with the most commented posts
app.get('/users', (req, res) => {
  const userCommentStats = [];

  for (const [userId, userName] of Object.entries(users)) {
    const userPosts = posts[userId] || [];
    let totalComments = 0;

    userPosts.forEach(post => {
      totalComments += (comments[post.id]?.length || 0);
    });

    userCommentStats.push({
      userId,
      userName,
      totalComments
    });
  }

  const topUsers = userCommentStats
    .sort((a, b) => b.totalComments - a.totalComments)
    .slice(0, 5);

  res.json({ topUsers });
});

// GET /posts?type=latest or type=popular
app.get('/posts', (req, res) => {
  const { type } = req.query;
  let allPosts = [];

  for (const postArray of Object.values(posts)) {
    allPosts = allPosts.concat(postArray);
  }

  if (type === 'latest') {
    const latestPosts = allPosts
      .sort((a, b) => b.id - a.id)
      .slice(0, 5);

    return res.json({ latestPosts });
  }

  if (type === 'popular') {
    let maxComments = 0;
    const postsWithCommentCount = allPosts.map(post => {
      const count = comments[post.id]?.length || 0;
      maxComments = Math.max(maxComments, count);
      return { post, count };
    });

    const popularPosts = postsWithCommentCount
      .filter(item => item.count === maxComments)
      .map(item => item.post);

    return res.json({ popularPosts });
  }

  res.status(400).json({ error: "Invalid query param. Use type=latest or type=popular" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
