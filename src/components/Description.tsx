import React from "react";

interface longFormDescription{
    description: String;

}

const Description : React.FC<longFormDescription> = ({description})=>{
    return(
        <div className="font-semibold text-gray-500 flex-wrap">{description}</div>
    )
}

export default Description