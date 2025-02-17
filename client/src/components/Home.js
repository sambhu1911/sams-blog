import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Grid, 
  CardContent, 
  CardActions, 
  Typography, 
  Button,
  Box 
} from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          color="primary"
          sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #1a237e 30%, #534bae 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Welcome to Kora Kagaz
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={6} key={post._id}>
              <AnimatedCard sx={{ height: '100%' }}>
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
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}

export default Home;