import React from "react";
import StarIcon from "../svg-logos/StarIcon";
import VerifiedIcon from "../svg-logos/VerifiedIcon";
import GroupIcon from "../svg-logos/GroupIcon";
import YtIcon from "../svg-logos/YtIcon";

interface PublisherProps {
  name: string;
  bio: string;
  title: string;
  rating: number;
  reveiw: number;
  coursesCount: number;
  studentsCount: number;
}

const Publisher: React.FC<PublisherProps> = ({
  name,
  bio,
  title,
  rating,
  coursesCount,
  reveiw,
  studentsCount,
}) => {
  return (
    <div className="flex flex-col lg:flex-row sm:flex-wrap p-4 rounded-2xl bg-white shadow-md w-full h-auto mt-3">
      {/* Publisher Info Section */}
      <div className="flex items-center mb-4">
        <img
          src="/pp.jpg"
          alt={name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-medium">{name}</h3>
          <span className="text-sm text-gray-600">{title}</span>
        </div>
      </div>

      {/* Bio Section */}
      <div className="text-sm text-gray-700 mb-4">{bio}</div>

      {/* Stats Section */}
      <div className="flex flex-col ">
        <div className="flex items-center mb-2 lg:mb-0 mt-1">
          <StarIcon />
          <div className="ml-2 text-gray-500 font-semibold">{rating}</div>
          <div className="ml-2 text-gray-500 font-semibold">Instructor Rating</div>
        </div>

        <div className="flex items-center mb-2 lg:mb-0 mt-1">
          <VerifiedIcon />
          <div className="ml-2 text-gray-500 font-semibold">{reveiw}</div>
          <div className="ml-2 text-gray-500 font-semibold">Reviews</div>
        </div>

        <div className="flex items-center mb-2 lg:mb-0 mt-1">
          <GroupIcon />
          <div className="ml-2 text-gray-500 font-semibold">{studentsCount}</div>
          <div className="ml-2 text-gray-500 font-semibold">Students</div>
        </div>

        <div className="flex items-center mt-1">
          <YtIcon />
          <div className="ml-2 text-gray-500 font-semibold">{coursesCount}</div>
          <div className="ml-2 text-gray-500 font-semibold">Courses</div>
        </div>
      </div>
    </div>
  );
};

export default Publisher;
