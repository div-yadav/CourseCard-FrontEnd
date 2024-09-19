import React from 'react';
import StarRating from '../components/StarRating';

const StarRatingPage: React.FC = () => {
  // Hardcoded values for demonstration
  const averageRating = 4.0;
  const totalRatings = 880;

  return (
    <div className=" bg-white text-gray-400 h-[7%] mt-3 w-full  rounded-2xl p-3">
      <StarRating averageRating={averageRating} totalRatings={totalRatings} />
    </div>
  );
};

export default StarRatingPage;
