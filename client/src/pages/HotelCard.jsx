import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative">
        <img src={room.images[0]} alt="hotel" className="w-full h-48 object-cover" />
        {index % 2 === 0 && (
          <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
            Best Seller
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{room.hotel.name}</h3>
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <img src={assets.starIconFilled} alt="star-icon" className="w-4 h-4" /> 4.5
          </div>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4 mr-2" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-800 font-semibold">
            ${room.pricePerNight} <span className="text-gray-500 font-normal text-sm">/night</span>
          </p>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-all">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
