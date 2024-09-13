import React from 'react';
import { Link } from 'react-router-dom';

const CardSection: React.FC = () => {
  return (
<div className="w-full py-16 bg-gray-200 flex items-center justify-center">
      <div className="flex flex-wrap justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-screen-xl">
        
        {/* Card 1 */}
        <div className="w-full sm:w-[350px] md:w-[400px] lg:w-[350px] h-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
          <img 
            src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg-1.webp" 
            alt="Buy" 
            className="w-[150px] h-[150px] object-cover"
          />
          <div className="p-4 flex flex-col items-center text-center flex-grow">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Buy</h2>
            <p className="text-gray-700 mb-4">Find your dream home with our expert agents.</p>
            <div className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">
              <Link to={'/realestate/properties-list'} > Browse properties  </Link> </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[350px] md:w-[400px] lg:w-[350px] h-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
          <img 
            src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-sell-lg-1.webp" 
            alt="Sell" 
            className="w-[150px] h-[150px] object-cover"
          />
          <div className="p-4 flex flex-col items-center text-center flex-grow">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sell</h2>
            <p className="text-gray-700 mb-4">Sell your property with the best market value.</p>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">See your options</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[350px] md:w-[400px] lg:w-[350px] h-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
          <img 
            src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-rent-lg-1.webp" 
            alt="Rent" 
            className="w-[150px] h-[150px] object-cover"
          />
          <div className="p-4 flex flex-col items-center text-center flex-grow">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Rental</h2>
            <p className="text-gray-700 mb-4">Find the perfect and nice rental property for you.</p>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">Find More</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CardSection;
