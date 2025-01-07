import { useState } from 'react';

function HeroSection() {
  const [searchType, setSearchType] = useState('rent');
  
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/placeholder.jpg')",
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.4)'
        }}
      />
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">
            Complete Real Estate Platform in Tokyo
          </h1>
          <p className="text-xl">
            Your Journey to Tokyo Living Starts Here
          </p>
        </div>
        
        <div className="w-full max-w-4xl bg-white rounded-lg p-4">
          <div className="flex gap-4 mb-4">
            {['rent', 'buy', 'short-term'].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded ${
                  searchType === type 
                    ? 'bg-orange-500 text-white' 
                    : 'border border-orange-500 text-orange-500'
                }`}
                onClick={() => setSearchType(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="w-full p-2 border rounded">
              <option>Shibuya Ward</option>
              <option>Shinjuku Ward</option>
              <option>Minato Ward</option>
            </select>
            <select className="w-full p-2 border rounded">
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3 Bedrooms</option>
            </select>
            <select className="w-full p-2 border rounded">
              <option>Price Range</option>
              <option>¥100,000 - ¥200,000</option>
              <option>¥200,000 - ¥300,000</option>
            </select>
          </div>
          
          <button className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
            Search Properties
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
