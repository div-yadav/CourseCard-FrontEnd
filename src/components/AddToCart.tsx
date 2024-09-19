import React from 'react';
import FileIcon from '../svg-logos/FileIcon';
import MobileIcon from '../svg-logos/MobileIcon';
import PlayIcon from '../svg-logos/PlayIcon';
import FolderIcon from '../svg-logos/FolderIcon';
import Save from '../svg-logos/Save';

interface AddToCartProps {
  courseDuration: number;
  version: string;
  resources: number;
  articles: number;
}

const AddToCart: React.FC<AddToCartProps> = ({ courseDuration, version, resources, articles }) => {
  return (
    <div className="bg-white flex flex-col text-white p-4 rounded-2xl shadow-md w-full ml-0 mt-5 mx-auto max-w-screen-lg">
      {/* Full Course Section */}
      <div className="fullcourse text-gray-400 font-bold text-sm sm:text-base md:text-lg lg:text-xl">
        Full Course
      </div>

      {/* Price and Discount Section */}
      <div className="flex lg:flex-row sm:flex-wrap w-full items-start sm:items-center">
        <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mt-3 sm:mt-0">
          $15.99
          <div className="block sm:inline line-through ml-4 text-gray-400 text-sm sm:text-base sm:mt-0">
            $30.99
          </div>
        </div>

        {/* Discount Badge */}
        <div className="flex sm:inline p-2 bg-purple-200 text-sm font-bold text-purple-800 sm:text-base rounded-xl mt-2 sm:mt-0 lg:ml-16 sm:ml-1">
          60% Off
        </div>
      </div>

      {/* Course Details Section */}
      <h2 className="text-lg sm:text-xl font-bold mt-3 mb-2 text-black">Course includes:</h2>
      <div className="space-y-2 text-sm sm:text-base">
        <div className="flex items-center">
          <PlayIcon />
          <span className="font-semibold ml-1 text-gray-400">{courseDuration} hours on Demand video</span>
        </div>

        <div className="flex items-center">
          <FileIcon />
          <span className="font-semibold ml-1 text-gray-400">{articles} Articles</span>
        </div>

        <div className="flex items-center">
          <FolderIcon />
          <span className="font-semibold ml-1 text-gray-400">{resources} Downloadable Resources</span>
        </div>

        <div className="flex items-center">
          <MobileIcon />
          <span className="font-semibold ml-1 text-gray-400">{version} Version</span>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="container flex flex-col sm:flex-row sm:items-center  mt-4">
        <button className="lg:h-full lg:ml-0 p-2 rounded-xl flex items-center justify-center Professional Services Team bg-[#6b47fc] w-[60%] lg:w-[70%] sm:w-[50%] mb-4 sm:mb-0">
          Add to cart
        </button>
        <button className="p-2 lg:ml-3 sm:ml-0 bg-transparent border-2 border-[#6b47fc] rounded-lg">
          <Save />
        </button>
      </div>
      
      <button className="border-2 border-[#6b47fc] text-[#6b47fc] w-full sm:w-[90%] rounded-lg mt-4 p-2">
        Buy now
      </button>
    </div>
  );
};

export default AddToCart;
