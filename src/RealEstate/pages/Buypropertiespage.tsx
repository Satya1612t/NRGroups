import { useState } from 'react';

const Buypropertypage = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa in Beverly Hills',
      price: 1650000000,
      type: 'House',
      image: 'https://example.com/villa.jpg',
      description: 'A beautiful villa with 5 bedrooms, 3 bathrooms, and a pool.',
    },
    {
      id: 2,
      title: 'Modern Apartment in New York City',
      price: 700000000,
      type: 'Flat',
      image: 'https://example.com/apartment.jpg',
      description: 'A modern apartment with city views, 2 bedrooms, and a gym.',
    },
    {
      id: 3,
      title: 'Cozy Cottage in the Countryside',
      price: 330000000,
      type: 'House',
      image: 'https://example.com/cottage.jpg',
      description: 'A charming cottage surrounded by nature, 3 bedrooms, and a garden.',
    },
    {
      id: 4,
      title: 'Penthouse in Dubai',
      price: 1250000000,
      type: 'Flat',
      image: 'https://example.com/penthouse.jpg',
      description: 'A luxurious penthouse with skyline views and a private elevator.',
    },
    {
      id: 5,
      title: 'Beach House in Malibu',
      price: 2600000000,
      type: 'House',
      image: 'https://example.com/beachhouse.jpg',
      description: 'A stunning beach house with ocean views, 4 bedrooms, and a hot tub.',
    },
    {
      id: 6,
      title: 'Commercial Office Space in Mumbai',
      price: 5000000000,
      type: 'Commercial Space',
      image: 'https://example.com/office.jpg',
      description: 'Spacious commercial office space in a prime location.',
    },
    {
      id: 7,
      title: 'Plot for Sale in Jaipur',
      price: 250000000,
      type: 'Plot',
      image: 'https://example.com/plot.jpg',
      description: 'A prime plot of land available for sale.',
    },
    
    {
      id: 7,
      title: 'Plot for Sale in Jaipur',
      price: 250000000,
      type: 'Plot',
      image: 'https://example.com/plot.jpg',
      description: 'A prime plot of land available for sale.',
    },
    
    {
      id: 8,
      title: 'Plot for Sale in Agra',
      price: 250000000,
      type: 'Plot',
      image: 'https://example.com/plot.jpg',
      description: 'A prime plot of land available for sale.',
    },
    
    {
      id: 9,
      title: 'Plot for Sale in Jaipur',
      price: 250000000,
      type: 'Plot',
      image: 'https://example.com/plot.jpg',
      description: 'A prime plot of land available for sale.',
    },
    // Add more properties as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const filteredProperties = properties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = propertyType === 'All' || property.type === propertyType;
    const matchesPrice = property.price >= minPrice && property.price <= maxPrice;
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="w-full  bg-gray-100">
      <div className="relative py-3 w-full bg-cover bg-center bg-[url('https://th.bing.com/th/id/R.70488945c7e8e7d9396166fa3b3aaa7a?rik=HGJ6cRHXUXyF5w&riu=http%3a%2f%2fmedia.equityapartments.com%2fimages%2fc_crop%2cx_0%2cy_0%2cw_1920%2ch_1080%2fc_fill%2cw_1920%2ch_1080%2fq_80%2ff_auto%2ffl_lossy%2f4129-1%2fthe-westmont-apartments-exterior.jpg&ehk=H0j9X3V%2fUvHitLVXcaUeKZnQ5ijcaeydVXVgcbpmOsk%3d&risl=&pid=ImgRaw&r=0')]">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-extrabold mb-10">
            Find Your Dream Property
          </h2>

          {/* Search Bar */}
          <div className="relative w-full max-w-md mx-auto mb-6">
            <input
              type="text"
              className="w-full p-4 pl-12 bg-white border border-gray-300 rounded-lg shadow-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search properties by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          {/* Filter by Property Type */}
          <div className="mb-8 flex justify-center space-x-4">
            <button
              className={`px-4 py-2 rounded-full border ${propertyType === 'All' ? 'bg-gray-800 text-white' : 'bg-white border-gray-300 text-gray-700'} hover:bg-gray-800 hover:text-white transition-colors`}
              onClick={() => setPropertyType('All')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-full border ${propertyType === 'Flat' ? 'bg-gray-800 text-white' : 'bg-white border-gray-300 text-gray-700'} hover:bg-gray-800 hover:text-white transition-colors`}
              onClick={() => setPropertyType('Flat')}
            >
              Flats
            </button>
            <button
              className={`px-4 py-2 rounded-full border ${propertyType === 'House' ? 'bg-gray-800 text-white' : 'bg-white border-gray-300 text-gray-700'} hover:bg-gray-800 hover:text-white transition-colors`}
              onClick={() => setPropertyType('House')}
            >
              Houses
            </button>
            <button
              className={`px-4 py-2 rounded-full border ${propertyType === 'Plot' ? 'bg-gray-800 text-white' : 'bg-white border-gray-300 text-gray-700'} hover:bg-gray-800 hover:text-white transition-colors`}
              onClick={() => setPropertyType('Plot')}
            >
              Plots
            </button>
            <button
              className={`px-4 py-2 rounded-full border ${propertyType === 'Commercial Space' ? 'bg-gray-800 text-white' : 'bg-white border-gray-300 text-gray-700'} hover:bg-gray-800 hover:text-white transition-colors`}
              onClick={() => setPropertyType('Commercial Space')}
            >
              Commercial Spaces
            </button>
          </div>

          {/* Price Filter */}
          <div className="mb-8 flex justify-center space-x-4">
            <input
              type="number"
              className="p-2 border rounded-lg"
              placeholder="Min Price (₹)"
              value={minPrice === 0 ? '' : minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
            <input
              type="number"
              className="p-2 border rounded-lg"
              placeholder="Max Price (₹)"
              value={maxPrice === Infinity ? '' : maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value) || Infinity)}
            />
          </div>
        </div>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 py-5 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-700 mb-4">{property.description}</p>
                <p className="text-xl font-bold text-gray-900 mb-4">
                  ₹{property.price.toLocaleString()}
                </p>
                <button className="bg-transparent border border-gray-800 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No properties found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Buypropertypage;
