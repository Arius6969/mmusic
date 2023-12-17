import React from 'react';

const Sidebar = () => {
 return (
    <div className="bg-gray-800 p-4">
      <div className="flex items-center">
        <img src="/IMG_9325.png" alt="Logo" className="w-16 h-16 object-cover" />
        <h1 className="text-white text-xl font-bold ml-4">My App</h1>
      </div>
      {/* Add your sidebar links here */}
    </div>
 );
};

export default Sidebar;