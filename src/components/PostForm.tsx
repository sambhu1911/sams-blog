import React, { useState } from 'react';
import { Post } from '../types';

interface PostFormProps {
  initialPost?: Post;
  onSave: (post: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ initialPost, onSave }) => {
  const [post, setPost] = useState<Post>(initialPost || { id: 0, title: '', content: '', imageUrl: '' });
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPost({ ...post, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    } else {
      setPost({ ...post, imageUrl: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(post);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" name="title" value={post.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Content</label>
        <textarea name="content" value={post.content} onChange={handleChange} required />
      </div>
      <div>
        <label>Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {post.imageUrl && <img src={post.imageUrl} alt="Post" style={{ maxWidth: '100px' }} />}
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;