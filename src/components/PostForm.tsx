import React, { useState } from 'react';

export interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

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
      setPost(prevPost => ({ ...prevPost, imageUrl: URL.createObjectURL(file) }));
    } else {
      setPost(prevPost => ({ ...prevPost, imageUrl: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(post);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          value={post.content}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        {post.imageUrl && (
          <img src={post.imageUrl} alt="Post" style={{ maxWidth: '100px' }} />
        )}
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;