import React from 'react';

const FeaturedSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-3 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Properties</h2>
      <p className="text-gray-700 mb-8 text-center max-w-2xl">
        Discover some of our top listings. Whether you're looking to buy, sell, or rent, these featured properties offer excellent options and opportunities.
      </p>
      <div className="flex flex-wrap justify-center space-x-4 w-full max-w-screen-xl">
        <div className="w-full sm:w-80 md:w-60 lg:w-72 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img 
            src="https://th.bing.com/th/id/R.dc9a9f1077eb96cbc13db9d86ef591eb?rik=B6VjVSlKFeG1Eg&riu=http%3a%2f%2fwww.thewowdecor.com%2fwp-content%2fuploads%2f2015%2f06%2fexterior-modern-homes-exterior-designs-ideas-with-white-wall-color-combine-with-stone-wall-layer-also-minimalist-style.jpg&ehk=FnYbAEU9PdsS0%2bji1G0YfHGPqbXD5wwYqAAhahgCYvw%3d&risl=&pid=ImgRaw&r=0" 
            alt="Featured Property" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Beautiful Family Home</h3>
            <p className="text-gray-600 mb-4">A spacious home with modern amenities, perfect for families looking for comfort and convenience.</p>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">View Details</button>
          </div>
        </div>

        <div className="w-full sm:w-80 md:w-60 lg:w-72 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img 
            src="https://th.bing.com/th/id/R.8d06a5a63af8e2a25e0dd7db4c31ae06?rik=fcl2UJ%2fB4OUkBA&riu=http%3a%2f%2fwww.gharexpert.com%2fUser_Images%2f120201720231.jpg&ehk=Sbjs9ASzBdfBuVVEX1lP%2fyNCaDP84xuegIFpBDfQa2w%3d&risl=&pid=ImgRaw&r=0" 
            alt="Featured Property" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Apartment</h3>
            <p className="text-gray-600 mb-4">A stylish and compact apartment located in the heart of the city, ideal for young professionals.</p>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">View Details</button>
          </div>
        </div>
        
      </div>
    </section>
  );


  
};

export default FeaturedSection;
