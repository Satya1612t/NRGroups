// RoleSelection.tsx
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    // Store the role in localStorage or pass it to the next form
    // Navigate to profile form
    navigate('/realestate/roleselection/profile-form', {state:role});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Who are you?</h2>
        <div className="flex space-x-4 justify-center">
          <button
            className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700"
            onClick={() => handleRoleSelect('Builder')}
          >        
            Builder
          </button>
          <button
            className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700"
            onClick={() => handleRoleSelect('Owner')}
          >
            Owner
          </button>
          <button
            className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700"
            onClick={() => handleRoleSelect('Agent')}
          >
            Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
