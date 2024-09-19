import React from "react";
import CourseCard from "../components/CourseCard";

const CoursePage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Available Courses</h1>
      <div className="grid grid-cols-3 gap-8">
        <CourseCard
          title="Blender 3D Fundamentals"
          thumbnail="blender-course.png"
          description="Learn the basics of Blender 3D from scratch"
          price="$15.99"
          rating={4.8}
          reviews={120}
        />
        {/* Add more CourseCard components for other courses */}
      </div>
    </div>
  );
};

export default CoursePage;
