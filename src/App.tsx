import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseDetail from './pages/CourseDetail';
import Home from './pages/CoursePage'; // Example import for other routes

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/555" element={<CourseDetail />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
