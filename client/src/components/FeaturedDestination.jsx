import React from 'react';
import { roomsDummyData } from '../assets/assets';
import HotelCard from '../pages/HotelCard';

const FeaturedDestination = () => {
  return (
    <div className="flex flex-col items-center bg-slate-100 py-16 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Featured Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestination;
