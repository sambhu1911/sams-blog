import React from 'react';

interface PostProps {
    title: string;
    excerpt: string;
}

const Post: React.FC<PostProps> = ({ title, excerpt }) => {
    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{excerpt}</p>
        </div>
    );
};

export default Post;