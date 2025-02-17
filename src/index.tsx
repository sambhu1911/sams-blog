import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);