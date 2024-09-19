import React from "react";
import ShareIcon from "../svg-logos/Share";
import HeartIcon from "../svg-logos/Heart-BlackIcon";

interface LikeShareProps {
  likes: number;
  name: string;
  catagory: string;
}

const LikeShare: React.FC<LikeShareProps> = ({ likes, name, catagory }) => {
  return (
    <div className="flex lg:flex-row mt-2 ">
        <div className="flex flex-row">
        <div className=" h-14 w-14"><img className="rounded-full h-full w-full" src="/pp.jpg" alt="" /></div>
        <div className="flex flex-col">

        <div className="ml-1 font-bold text-lg"> {name}</div>
        <div className="ml-1">{catagory}</div>

        </div>
      </div>

      <div className="lg:ml-[63%] md:ml-[25%] sm:ml-[10%] flex flex-row ">
      <div className=""><HeartIcon/></div>
        <div className="ml-1">{likes}</div>
        <div className="ml-2"><ShareIcon/></div>

    </div>
    </div>
  );
};

export default LikeShare;
