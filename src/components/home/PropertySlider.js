import { useState } from 'react';

function PropertySlider() {
  const properties = [
    {
      id: 1,
      image: '/assets/images/placeholder.jpg',
      price: '¥300,000',
      location: 'Shirokane 3 5-7, Minato-ku, Tokyo',
      size: '50m²',
      type: '1LDK',
      beds: '1 Bed'
    },
    // More properties...
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Trending Rentals in Tokyo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(property => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertySlider;