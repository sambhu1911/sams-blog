import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, deletePost } from '../utils/api';
import { Post } from '../types';
import PostList from '../components/PostList';

export interface Post {
  id: number;
  title: string;
  content: string;
}

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
      <h1 className="center-title">Welcome to Kora kagaz</h1>
      <PostList posts={posts} onDelete={handleDelete} />
      <Link to="/create">Create New Post</Link>
    </div>
  );
};

export default Home;