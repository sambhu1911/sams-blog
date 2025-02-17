import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Kora Kagaz
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/resources">Resources</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button 
            variant="contained" 
            color="secondary" 
            component={Link} 
            to="/create"
          >
            Create Post
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;