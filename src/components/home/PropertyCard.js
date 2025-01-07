function PropertyCard({ image, price, location, size, type, beds }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={location} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="text-xl font-bold mb-2">{price} / month</div>
        <div className="text-gray-600 mb-4">{location}</div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{size}</span>
          <span>{type}</span>
          <span>{beds}</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;