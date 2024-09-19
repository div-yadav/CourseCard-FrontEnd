import React from "react";

const HamburgerIcon : React.FC = () =>{
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-4 cursor-pointer hover:z-10 hover:scale-110 hover:drop-shadow-lg hover:text-white transition-all duration-300 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h7" /> {/* Shortened this line */}
          </svg>

    )
}

export default HamburgerIcon;