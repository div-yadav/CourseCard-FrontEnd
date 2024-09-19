import React from "react";
import LikeShare from "../components/LikeShareSection";

const LikeSharePage : React.FC = ()=>{
    const likes = 982
    const name = "Ryan Curtis"
    const catagory = "Publisher"

    return(

<div className="">
    <LikeShare likes={likes} 
    name={name} 
    catagory={catagory}/>
</div>

    )
}

export default LikeSharePage