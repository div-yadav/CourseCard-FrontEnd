import React from "react";
import YtIcon from "../svg-logos/YtIcon";
import ClockIcon from "../svg-logos/ClockIcon";
import LevelIcon from "../svg-logos/LevelIcon";
import EyeIcon from "../svg-logos/EyeIcon";


interface CourseDetails {
  lessons: number;
  duration: number;
  skillLevel: string;
  views: number;
}

const CourseDetail: React.FC<CourseDetails> = ({ lessons, duration, skillLevel, views }) => {
  return (
    <div className="mt-5">
      <div className="font-bold text-lg">
        <h1>Course Details</h1>
      </div>
      <div className="flex h-20 w-full gap-6 mt-3"> 
        <div className="flex-col flex-1 h-full flex items-center justify-center bg-white rounded-2xl ">
          <div className="text-gray-500 font-semibold">Lessons</div>
          <div className="flex flex-row">
          <div className="mr-2"><YtIcon/></div>
          {lessons}
          </div>
        </div>
        <div className="flex-col flex-1 h-full flex items-center justify-center bg-white rounded-2xl ">
        <div className="text-gray-500 font-semibold">Duration</div>
        <div className="flex flex-row">
          <div className="mr-2"><ClockIcon/></div>
          {duration}
        </div>
        </div>
        <div className="flex-col flex-1 h-full flex items-center justify-center bg-white rounded-2xl ">
        <div className="text-gray-500 font-semibold">Skill Level</div>
        <div className="flex flex-row">
          <div className="mr-2"><LevelIcon/></div>
          {skillLevel}
        </div>
        </div>
        <div className="flex-col flex-1 h-full flex items-center justify-center bg-white rounded-2xl ">
        <div className="text-gray-500 font-semiboldfont-semibold">Views</div>
        <div className="flex flex-row">
          <div className="mr-2"><EyeIcon/></div>
          {views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
