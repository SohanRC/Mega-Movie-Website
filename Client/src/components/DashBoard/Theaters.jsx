import React from 'react';
import Sidebar from './Sidebar';
import Theaters from './Theaters-component';

const Theater = () => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <Sidebar />
      {/* Adjusted padding to prevent overlap */}
      <div className="flex-grow pt-20 pl-4 pr-4 overflow-y-auto">
        <Theaters />
      </div>
    </div>
  );
};

export default Theater;
