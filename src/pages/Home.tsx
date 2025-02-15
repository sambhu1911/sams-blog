import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, deletePost } from '../utils/api';
import { Post } from '../types';
import PostList from '../components/PostList';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };
    loadPosts();
  }, []);

  const handleDelete = async (id: number) => {
    await deletePost(id);
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="container">
      <h1>All Posts</h1>
      <PostList posts={posts} onDelete={handleDelete} />
      <Link to="/create">Create New Post</Link>
    </div>
  );
};

export default Home;