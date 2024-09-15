// ProfileForm.tsx
import { useNavigate , useLocation } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect } from 'react';

interface ProfileFormValues {
  fullName: string;
  address: string;
  role: string; // This will store the selected role (Builder, Owner, Agent)
  city?: string; // Only for Builders and Agents
  AadhaarNumber?: string; // Only for Agents
}

const ProfileForm = () => {
  const { register, handleSubmit, setValue } = useForm<ProfileFormValues>();
  const navigate = useNavigate();
  const location =useLocation();
  const role=location.state
  // Pre-fill the form with the role value when the component mounts
  useEffect(() => {
    if (role) {
      setValue('role', role); // Automatically set the role in the form
    }
  }, [role, setValue]);

  const onSubmit: SubmitHandler<ProfileFormValues> = (data) => {
    // Submit form data to backend or store locally
    console.log(data);

    // Redirect to dashboard after profile creation
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Complete Your Profile</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            {...register('fullName')}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            {...register('address')}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <input
            type="text"
            {...register('role')}
            value={role || ''}                                             // Display the role (Builder, Owner, or Agent)
            className="w-full px-3 py-2 border rounded-lg bg-gray-200"                   // Make the field non-editable
            readOnly
          />
        </div>

        
          <div className="mb-4">
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              {...register('city')}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
       
          <div className="mb-4">
            <label className="block text-gray-700">Aadhaar Number</label>
            <input
              type="text"
              {...register('AadhaarNumber')}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        

        <button type="submit" className="w-full bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700">
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
