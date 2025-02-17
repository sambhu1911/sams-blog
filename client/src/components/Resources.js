import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Link,
  Box
} from '@mui/material';
import { Book, Language, School } from '@mui/icons-material';

function Resources() {
  const resources = [
    {
      title: 'Writing Guide',
      description: 'Learn the art of creative writing with our comprehensive guide.',
      icon: <Book color="primary" sx={{ fontSize: 40 }} />,
      link: '#'
    },
    {
      title: 'Online Courses',
      description: 'Explore our collection of online writing courses.',
      icon: <School color="primary" sx={{ fontSize: 40 }} />,
      link: '#'
    },
    {
      title: 'Useful Links',
      description: 'Curated list of helpful writing resources and tools.',
      icon: <Language color="primary" sx={{ fontSize: 40 }} />,
      link: '#'
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Resources
      </Typography>
      <Grid container spacing={4}>
        {resources.map((resource, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card 
              elevation={3}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}
            >
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  {resource.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography color="textSecondary" paragraph>
                  {resource.description}
                </Typography>
                <Link href={resource.link} color="primary">
                  Learn More
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Resources;