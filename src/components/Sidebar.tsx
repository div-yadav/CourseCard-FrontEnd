import React, { useState } from 'react';

interface SidebarProps {
  title: string;
  items: string[];
}

const Sidebar: React.FC<Partial<SidebarProps>> = ({ title, items }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-900 text-white h-full p-4 rounded-tr-3xl">
      {/* Main heading with dropdown arrow on the right */}
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
        <h2 className="lg:text-l lg:font-medium md:text-m sm:text-sm">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Subheading list items (hidden until dropdown is expanded) */}
      <ol className={`list-decimal mt-0 transition-all duration-700 ease-in-out overflow-hidden ${isDropdownOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {items?.map((item, index) => (
          <li key={index} className="mb-4 ml-6">
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Sidebar;
