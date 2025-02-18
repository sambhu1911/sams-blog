import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { AnimatePresence } from 'framer-motion';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Contact from './components/Contact';
import Resources from './components/Resources';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

async function fetchPosts() {
  try {
    const response = await axios.get(`${API_URL}/api/posts`);
    // ... rest of your code ...
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function AppContent() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;