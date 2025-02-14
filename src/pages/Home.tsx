import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';

const Home = () => {
    const posts = [
        { id: 1, title: 'First Blog Post', excerpt: 'This is the excerpt of the first blog post.' },
        { id: 2, title: 'Second Blog Post', excerpt: 'This is the excerpt of the second blog post.' },
        { id: 3, title: 'Third Blog Post', excerpt: 'This is the excerpt of the third blog post.' },
    ];

    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Blog</h1>
                <div>
                    {posts.map(post => (
                        <Post key={post.id} title={post.title} excerpt={post.excerpt} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;