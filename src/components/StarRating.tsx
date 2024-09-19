import React from 'react';

interface StarRatingProps {
  averageRating: number;
  totalRatings: number;
}

const StarRating: React.FC<StarRatingProps> = ({ averageRating, totalRatings }) => {
  const totalStars = 5;
  const filledStars = Math.floor(averageRating); // Full stars
  const halfStar = averageRating % 1 !== 0; // Check if there is a half star
  const stars = Array.from({ length: totalStars }, (_, index) => index + 1);

  return (
    <div className="flex lg:flex-row  md:flex-row sm:flex-col items-start">
    <div className="flex-shrink-0 mb-0 sm:mb-0">
      <img 
        src='/star-in-eyes.png' 
        alt='smiling-emoji' 
        className="w-10 h-10 sm:w-12 sm:h-12 mt-2" 
      />
    </div>
    <div className="flex flex-col text-sm sm:text-base text-black font-bold mt-2 sm:ml-4 justify-center">
      Ratings<br />
      <span className="mt-1 text-xs sm:text-sm text-gray-400 justify-center items-center">2492 Students</span>
    </div>
  
    {/* Only display stars on large screens */}
    <div className="flex flex-col lg:flex lg:ml-20 md:hidden sm:hidden ">
      <div className="flex ">
        {stars.map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className={`lg:w-4 lg:h-4 sm:w-0 sm:h-0 mt-3 ${
              star <= filledStars
                ? 'text-yellow-400' // Full stars
                : star === filledStars + 1 && halfStar
                ? 'text-yellow-300' // Half star
                : 'text-gray-300' // Empty stars
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        ))}
      </div>
      <div className="font-semibold text-xs sm:text-base mt-1">
        <span className="text-xs sm:text-sm text-gray-400">
          {`${averageRating.toFixed(1)} (${totalRatings} ratings)`}
        </span>
      </div>
    </div>
  </div>
  
  );
};

export default StarRating;
