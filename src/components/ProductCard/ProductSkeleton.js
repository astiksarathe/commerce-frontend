import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col w-1/2 sm:w-1/3 xl:w-1/4 bg-white p-5 border-r border-b relative">
      <a href="#" className="block mb-5">
        <div className="relative aspect-square">
          <div className="absolute top-0 left-0 h-full w-full bg-gray-300 animate-pulse" />
        </div>
      </a>
      <div className="flex flex-col justify-between flex-shrink-0 flex-grow min-w-0">
        <div>
          <div className="w-32 h-4 bg-gray-300 rounded-md mb-2 animate-pulse" />
          <div className="w-full h-6 bg-gray-300 rounded-md mb-3 animate-pulse" />
          <div className="flex items-baseline space-x-2 mb-2">
            <div className="w-24 h-6 bg-gray-300 rounded-md animate-pulse" />
            <div className="w-24 h-6 bg-gray-300 rounded-md animate-pulse" />
          </div>
          <div className="block mt-2">
            <div className="flex items-center">
              <div className="w-20 h-4 bg-gray-300 rounded-md animate-pulse" />
            </div>
          </div>
          <div className="w-32 h-4 bg-gray-300 rounded-md mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
