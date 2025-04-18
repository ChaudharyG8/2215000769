import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';
import Feed from './pages/Feed';
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow p-4 flex justify-around text-lg font-semibold">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Top Users</NavLink>
          <NavLink to="/trending" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Trending Posts</NavLink>
          <NavLink to="/feed" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Feed</NavLink>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/" element={<TopUsers />} />
            <Route path="/trending" element={<TrendingPosts />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;