import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursePage from '../pages/CoursePage';
import CourseDetail from '../pages/CourseDetail';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoursePage />} />
        <Route path="/course/555" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
