import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">Welcome to Kora Kagaz</Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item xs={12} md={6} key={post._id}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom>{post.title}</Typography>
                <Typography color="textSecondary">{new Date(post.createdAt).toLocaleDateString()}</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>{post.content.substring(0, 200)}...</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/post/${post._id}`}>Read More</Button>
                <Button size="small" component={Link} to={`/edit/${post._id}`} color="primary">Edit</Button>
                <Button size="small" color="error" onClick={() => handleDelete(post._id)}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button variant="contained" color="primary" component={Link} to="/create" size="large">Create New Post</Button>
      </Box>
    </Container>
  );
}

export default Home;