import React from 'react';

const CardSection: React.FC = () => {
  return (
    <div className="w-full py-16 bg-gray-200 flex items-center justify-center">
      <div className="flex flex-wrap justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full h-full max-w-screen-xl">
        
        {/* Card 1 */}
        <div className="w-full sm:w-80 md:w-60 lg:w-72 h-[80%] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          <img 
            src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg-1.webp" 
            alt="Buy" 
            className="w-full h-75 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <p className="text-gray-700 mb-4">Find your dream home with our expert agents.</p>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">Buy</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-80 md:w-60 lg:w-72 h-[80%] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          <img 
            src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-sell-lg-1.webp" 
            alt="Sell" 
            className="w-full h-75 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <p className="text-gray-700 mb-4">Sell your property with the best market value.</p>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">Sell</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-80 md:w-60 lg:w-72 h-[80%] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          <img 
            src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-rent-lg-1.webp" 
            alt="Rent" 
            className="w-full h-75 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <p className="text-gray-700 mb-4">Find the perfect rental property for you.</p>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">find more</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CardSection;
