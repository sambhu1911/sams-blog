import React from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  // add other properties as needed
}

interface PostDetailProps {
  post?: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;