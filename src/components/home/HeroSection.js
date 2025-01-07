import React from 'react';
import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/public/assets/images/placeholder.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16">
        {/* Rating Section
        <div className="flex flex-col items-center mb-8">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-2 border-white bg-gray-200"
              />
            ))}
          </div>
          <div className="flex items-center mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-5 h-5 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <p className="text-white mt-2">Tokyo's #1 Rated Agency</p>
        </div> */}

        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Real Estate SankouGP<br /> in Japan
          </h1>
          <p className="text-xl text-white mb-12">
            
          </p>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto">
            {/* Property Type Tabs */}
            <div className="flex justify-center space-x-4 mb-6">
              {['Rent', 'Buy', 'Short-term'].map((type) => (
                <button
                  key={type}
                  className={`px-6 py-2 rounded-full text-sm font-medium ${
                    type === 'Rent'
                      ? 'bg-white text-black'
                      : 'bg-transparent text-white border border-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Search Form */}
            <div className="bg-white p-4 rounded-lg flex items-center gap-4">
              <div className="flex-1">
                <label className="text-sm text-gray-500">Location</label>
                <select className="w-full mt-1 bg-transparent">
                  {/* <option>Shibuya Ward</option> */}
                </select>
              </div>
              <div className="flex-1">
                <label className="text-sm text-gray-500">Bedrooms</label>
                <select className="w-full mt-1 bg-transparent">
                  {/* <option>1 Bedroom</option> */}
                </select>
              </div>
              <div className="flex-1">
                <label className="text-sm text-gray-500">Price</label>
                <select className="w-full mt-1 bg-transparent">
                  {/* <option>None</option> */}
                </select>
              </div>
              <button className="bg-[#FF4400] text-white px-8 py-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Guided Search Link */}
            {/* <div className="text-center mt-6">
              <a href="#" className="text-white text-sm hover:underline">
                Need some help? Try our guided search here
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;