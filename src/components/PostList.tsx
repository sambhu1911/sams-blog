import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

export interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostListProps {
  posts: Post[];
  onDelete: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onDelete }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link to={`/edit/${post.id}`}>Edit</Link>
          <button onClick={() => onDelete(post.id)} aria-label={`Delete post ${post.title}`}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;