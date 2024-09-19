import React from "react";
import CourseDetail from "../components/CourseOverView";

const CourseDetailsPage: React.FC =()=>{
    return(
        <div className="">
            <CourseDetail lessons={128} duration={56} skillLevel="Beginner" views={12620}/>
        </div>
    )
}

export default CourseDetailsPage