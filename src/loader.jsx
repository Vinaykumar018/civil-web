// PageLoader.jsx - Building Blocks Loader
import React from 'react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-50/90 backdrop-blur-sm">
      <div className="flex items-end space-x-1.5 h-16">
        
        {/* Block 1: Foundation (Shorter, deeper color) */}
        <div 
          className="w-4 h-6 bg-gray-700 rounded-sm transform origin-bottom animate-block-bounce" 
          style={{ animationDelay: '0s', animationDuration: '0.8s' }}
        ></div>
        
        {/* Block 2: Middle Structure (Medium height) */}
        <div 
          className="w-4 h-9 bg-yellow-600 rounded-sm transform origin-bottom animate-block-bounce" 
          style={{ animationDelay: '0.2s', animationDuration: '1.0s' }}
        ></div>
        
        {/* Block 3: Crane/Topping Block (Tallest, different color) */}
        <div 
          className="w-4 h-12 bg-blue-700 rounded-sm transform origin-bottom animate-block-bounce" 
          style={{ animationDelay: '0.4s', animationDuration: '1.2s' }}
        ></div>
        
      </div>
       <p className="absolute mt-24 text-sm font-medium text-gray-600">Building...</p>
    </div>
  );
};

export default PageLoader;