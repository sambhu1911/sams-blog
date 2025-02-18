import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Link,
  Box,
  Paper
} from '@mui/material';
import { Book, Language, School, Code } from '@mui/icons-material';
import { pageVariants, staggerContainerVariants, itemVariants } from '../animations/pageTransitions';

function Resources() {
  const resources = [
    {
      title: 'Writing Guide',
      description: 'Master the art of creative writing with our comprehensive guide.',
      icon: <Book fontSize="large" color="primary" />,
      link: '#'
    },
    {
      title: 'Online Courses',
      description: 'Access our collection of curated writing courses and workshops.',
      icon: <School fontSize="large" color="primary" />,
      link: '#'
    },
    {
      title: 'Writing Tools',
      description: 'Discover powerful tools to enhance your writing process.',
      icon: <Code fontSize="large" color="primary" />,
      link: '#'
    },
    {
      title: 'Useful Links',
      description: 'Curated list of helpful writing resources and tools.',
      icon: <Language fontSize="large" color="primary" />,
      link: '#'
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <motion.div variants={staggerContainerVariants}>
            <Typography 
              variant="h3" 
              component={motion.h1}
              variants={itemVariants}
              sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #1a237e 30%, #534bae 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Resources
            </Typography>

            <Grid container spacing={4}>
              {resources.map((resource, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <Card
                      component={motion.div}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 2,
                        overflow: 'hidden',
                        background: 'linear-gradient(to bottom, #ffffff, #f5f5f5)'
                      }}
                    >
                      <CardContent>
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'center', 
                          mb: 3,
                          transform: 'scale(1.2)'
                        }}>
                          {resource.icon}
                        </Box>
                        <Typography 
                          variant="h6" 
                          gutterBottom
                          sx={{ 
                            textAlign: 'center',
                            fontWeight: 600,
                            color: 'primary.main'
                          }}
                        >
                          {resource.title}
                        </Typography>
                        <Typography 
                          color="textSecondary" 
                          sx={{ 
                            mb: 3,
                            textAlign: 'center',
                            lineHeight: 1.6
                          }}
                        >
                          {resource.description}
                        </Typography>
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'center' 
                        }}>
                          <Link 
                            href={resource.link} 
                            color="primary"
                            sx={{ 
                              textDecoration: 'none',
                              fontWeight: 500,
                              '&:hover': { 
                                textDecoration: 'underline' 
                              }
                            }}
                          >
                            Learn More →
                          </Link>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Paper>
      </Container>
    </motion.div>
  );
}

export default Resources;