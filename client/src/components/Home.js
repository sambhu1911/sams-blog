import { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { MotionContainer, MotionCard, fadeInUp, staggerContainer } from './animations/MotionComponents';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <MotionContainer maxWidth="lg" sx={{ mt: 4 }} {...staggerContainer}>
      <Typography
        component={motion.h1}
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: 4,
          background: 'linear-gradient(45deg, #1a237e 30%, #534bae 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
        {...fadeInUp}
      >
        Welcome to Kora Kagaz
      </Typography>

      <Grid container spacing={4}>
        {posts.map((post, index) => (
          <Grid item xs={12} md={6} key={post._id}>
            <MotionCard
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom color="primary">
                  {post.title}
                </Typography>
                <Typography color="textSecondary" sx={{ mb: 2 }}>
                  {new Date(post.createdAt).toLocaleDateString()}
                </Typography>
                <Typography variant="body1">
                  {post.content.substring(0, 200)}...
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  component={Link} 
                  to={`/post/${post._id}`}
                  variant="contained" 
                  color="primary"
                >
                  Read More
                </Button>
              </CardActions>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </MotionContainer>
  );
}

export default Home;