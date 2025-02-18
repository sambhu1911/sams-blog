import { motion } from 'framer-motion';
import { Container, Typography, TextField, Button, Paper, Box, Grid } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { pageVariants, staggerContainerVariants, itemVariants } from '../animations/pageTransitions';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <motion.div variants={staggerContainerVariants}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <motion.div variants={itemVariants}>
              <Typography variant="h4" gutterBottom color="primary">
                Contact Us
              </Typography>
            </motion.div>
            
            <Grid container spacing={4} sx={{ mb: 4 }} component={motion.div} variants={staggerContainerVariants}>
              <Grid item xs={12} md={4}>
                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Email color="primary" sx={{ mr: 1 }} />
                    <Typography>email@example.com</Typography>
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>
                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Phone color="primary" sx={{ mr: 1 }} />
                    <Typography>+1 234 567 890</Typography>
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>
                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOn color="primary" sx={{ mr: 1 }} />
                    <Typography>New Delhi, India</Typography>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <motion.div variants={itemVariants}>
                    <TextField
                      fullWidth
                      label="Name"
                      required
                      variant="outlined"
                    />
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <motion.div variants={itemVariants}>
                    <TextField
                      fullWidth
                      label="Email"
                      required
                      type="email"
                      variant="outlined"
                    />
                  </motion.div>
                </Grid>
                <Grid item xs={12}>
                  <motion.div variants={itemVariants}>
                    <TextField
                      fullWidth
                      label="Message"
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </motion.div>
                </Grid>
                <Grid item xs={12}>
                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </motion.div>
      </Container>
yes    </motion.div>
  );
}

export default Contact;