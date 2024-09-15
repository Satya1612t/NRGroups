import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Property {
  title: string;
  description: string;
  price: number;
  type: 'rent' | 'sell';
  imageUrl: string;
}

const AddPropertyPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | ''>(''); // State for price
  const [type, setType] = useState<'rent' | 'sell'>('rent');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImageUrl(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate inputs
    if (!title || !description || price === '' || isNaN(Number(price))) {
      alert('Please fill in all fields correctly.');
      return;
    }

    const newProperty: Property = {
      title,
      description,
      price: Number(price), // Convert price to number
      type,
      imageUrl,
    };

    // Save the property to local storage
    const existingProperties = localStorage.getItem('properties');
    const propertiesArray: Property[] = existingProperties ? JSON.parse(existingProperties) : [];
    propertiesArray.push(newProperty);
    localStorage.setItem('properties', JSON.stringify(propertiesArray));

    // Navigate to another page (e.g., property list page)
    navigate('/realestate/properties-list');
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Convert price to number, or keep it as an empty string
    const value = e.target.value;
    setPrice(value === '' ? '' : Number(value));
  };

  return (
    <div className="min-h-screen px-3 py-8 bg-cover bg-center bg-opacity-40"
         style={{ backgroundImage: `url('https://wallpapers.com/images/featured/apartment-bbiy2mat3yd31d3t.jpg')` }}>
      <div className="relative bg-black bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg w-full max-w-lg mx-auto p-8">
        <div className="absolute inset-0 bg-white bg-opacity-10 rounded-lg z-[-1]" />

        <div className="text-center mb-6">
          <h2 className="text-gray-800 text-2xl font-bold">Add Your Property</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-white">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-white"
              placeholder="Enter property title"
            />
          </div>

          <div>
            <label className="block mb-1 text-white">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-white"
              placeholder="Enter property description"
            />
          </div>

          <div>
            <label className="block mb-1 text-white">Price</label>
            <input
              type="number"
              value={price === '' ? '' : price} // Ensure empty string handling
              onChange={handlePriceChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-white"
              placeholder="Enter property price"
            />
          </div>

          <div>
            <label className="block mb-1 text-white">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as 'rent' | 'sell')}
              className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-white"
            >
              <option value="rent">Rent</option>
              <option value="sell">Sell</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-white">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-white"
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Property Preview"
                className="mt-4 w-full h-auto rounded-lg"
              />
            )}
          </div>

          <button type="submit" className="w-full border border-gray-800 text-gray-800 py-2 rounded-lg shadow-inherit hover:bg-gray-700 hover:text-white transition-colors">
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyPage;
