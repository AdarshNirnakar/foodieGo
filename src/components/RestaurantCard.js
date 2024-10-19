import React from 'react';

const RestaurantCard = (props) => {
  const { resData, onClick } = props;
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-full flex flex-col transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`} 
          alt={resData.info.name} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-0 right-0 bg-white px-2 py-1 m-2 rounded-full shadow">
          <span className="text-yellow-500 font-bold">⭐ {resData.info.avgRating}</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{resData.info.name}</h2>
          <p className="text-gray-600 mb-4">{resData.info.cuisines.join(', ')}</p>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-700 font-semibold">{resData.info.costForTwo}</span>
          <span className="text-green-600 font-semibold">
            {resData.info.sla.deliveryTime} min delivery
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
