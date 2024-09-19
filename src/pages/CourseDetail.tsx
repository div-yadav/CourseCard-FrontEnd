import React from "react";
import PublisherPage from "./PublisherPage";
import FaQPage from "./FaqPage";
import StarRatingPage from "./StarRatingPage";
import SidebarPage from "./SidebarPage.tsx";
import AddToCartPage from './AddToCartPage';
import DescriptionPage from "./DescriptionPage.tsx";
import LikeSharePage from "./LikeShareSectionPage.tsx";
import CourseDetailsPage from "./CourseOverViewPage.tsx";
import HamburgerIcon from "../svg-logos/HamburgerIcon.tsx"
import LikeIcon from "../svg-logos/LikeIcon.tsx";
import BagIcon from "../svg-logos/BagIcon.tsx"
import NotificationIcon from "../svg-logos/NotficationIcon.tsx";



const CourseDetail: React.FC = () => {
  return (
    <div className="min-w-[60vw] flex flex-col bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between text-3xl font-bold text-white p-4">
        
        <div className="flex items-center">

          <HamburgerIcon />

          <span className="text-white">Quantum</span>

        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center space-x-3">
          <LikeIcon />
          <BagIcon />
          <NotificationIcon />
        </div>

      </div>
            {/* Header Section end */}


      <div className="flex flex-row rounded-3xl">

        <div className=" w-[20%] text-white ">
        <SidebarPage/>
        </div>
        

        <div className="flex flex-row w-full bg-slate-200 mt-1 rounded-tl-3xl">



            {/* Thumbnail section main div */}

          <div className="flex flex-col  mt-5 ml-5  w-[58%]">



            <img
              src="../blender-course.png"
              alt="Course Thumbnail"
              className="w-full h-[35%] object-cover rounded-2xl"
            />

            <LikeSharePage/>

            <div className="MainDescription">
            <div className="font-bold text-lg"><h1>Description</h1></div>
            <div className="mt-3"><DescriptionPage /></div>
            </div>


            <div><CourseDetailsPage/></div>


            
              <FaQPage/>


          </div>

            {/* Thumbnail section main div endsss here!!!!!!!!!!!!!! */}


            {/* rightmost div  */}

            <div className="w-[36%] flex flex-col lg:ml-5 md:ml-1">
              <AddToCartPage />
              <StarRatingPage />
              <PublisherPage />
            </div>

              {/* rightmost div  */}
            
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
