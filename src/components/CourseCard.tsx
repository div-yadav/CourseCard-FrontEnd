import React from "react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  thumbnail: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  thumbnail,
  description,
  price,
  rating,
  reviews,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold text-purple-600">{price}</span>
        <span className="text-yellow-500">⭐ {rating} ({reviews} reviews)</span>
      </div>
      <Link to="/courses/555">
        <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md">
          View Course
        </button>
      </Link>
    </div>
  );
};

export default CourseCard;
