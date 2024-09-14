import { useState } from 'react';

const Loginsignuppage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-opacity-20"
      style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_1280.jpg')` }}  // Replace with your image URL
    >
      <div className="relative bg-black bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg w-full max-w-md p-8">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-white bg-opacity-30 rounded-lg z-[-1]" />

        {/* Real Estate Text */}
        <div className="text-center mb-6">
          <h2 className="text-white text-2xl font-bold">Welcome to NR Real Estate</h2>
        </div>

        {/* Form Section */}
        <h2 className="text-xl font-semibold text-center mb-4 text-white">
          {isLogin ? 'Login to Your Account' : 'Create an Account'}
        </h2>

        <form className="space-y-4">
          {/* Name field only for Signup */}
          {!isLogin && (
            <div>
              <label className="block mb-1 text-white">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-white">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-white">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          {/* Confirm Password for Signup */}
          {!isLogin && (
            <div>
              <label className="block mb-1 text-white">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
          )}

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle Form */}
        <div className="text-center mt-4">
          <button onClick={toggleForm} className="text-white hover:underline">
            {isLogin ? 'Don’t have an account? Sign Up' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginsignuppage;
