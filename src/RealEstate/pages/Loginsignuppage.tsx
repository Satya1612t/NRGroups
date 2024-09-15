import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import  Loader from '../components/Loader';

interface FormValues {
  name?: string;
  confirmPassword?: string;
  phone?: string;
  email: string;
  password: string;
}

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const signupSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
});

const Loginsignuppage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const schema = isLogin ? loginSchema : signupSchema;

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    try {
      let response;
      if (isLogin) {
        response = await fetch('https://66e5d1085cc7f9b6273e729f.mockapi.io/realestate/user/Users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        });
        const result = await response.json();
        if (response.ok) {
          toast.success('Login successful!', {
            duration: 4000,
            style: {
              background: '#4caf50',
              color: '#fff',
            },
          });
          navigate('/realestate/roleselection');
        } else {
          throw new Error(result.message || 'Login failed');
        }
      } else {
        response = await fetch('https://66e5d1085cc7f9b6273e729f.mockapi.io/realestate/user/Users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
          }),
        });
        const result = await response.json();
        if (response.ok) {
          toast.success('Sign up successful! Redirecting...', {
            duration: 4000,
            style: {
              background: '#2196f3',
              color: '#fff',
            },
          });
          setTimeout(() => {
            window.location.href = '/realestate/loginpage';
          }, 4000);
        } else {
          throw new Error(result.message || 'Sign up failed');
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || 'Something went wrong. Please try again.', {
          duration: 4000,
          style: {
            background: '#f44336',
            color: '#fff',
          },
        });
      } else {
        toast.error('An unexpected error occurred. Please try again.', {
          duration: 4000,
          style: {
            background: '#f44336',
            color: '#fff',
          },
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
  className="min-h-screen px-3 flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpapers.com/images/featured/apartment-bbiy2mat3yd31d3t.jpg')`
  }}
>
      <div className="relative bg-black bg-opacity-20 backdrop-blur-lg  rounded-xl shadow-lg w-full max-w-md p-8">
        <div className="absolute inset-0 bg-white bg-opacity-10 rounded-lg z-[-1]" />
        <div className="text-center mb-6">
          <h2 className="text-gray-800 text-2xl font-bold">Welcome to NR Real Estate</h2>
        </div>
        <h2 className="text-xl font-semibold text-center mb-4 text-white">
          {isLogin ? 'Login to Your Account' : 'Create an Account'}
        </h2>
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block mb-1 text-white">Name</label>
                <input
                  type="text"
                  {...register('name')}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-white"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
            )}
            <div>
              <label className="block mb-1 text-white">Email</label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-white"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block mb-1 text-white">Password</label>
              <input
                type="password"
                {...register('password')}
                className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-white"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            {!isLogin && (
              <>
                <div>
                  <label className="block mb-1 text-white">Confirm Password</label>
                  <input
                    type="password"
                    {...register('confirmPassword')}
                    className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-white"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                </div>
                <div>
                  <label className="block mb-1 text-white">Phone Number</label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-2 bg-white bg-opacity-20 border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-white"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
              </>
            )}
            <button
              type="submit"
              className="w-full border border-gray-800 text-gray-800 py-2 rounded-lg shadow-inherit hover:bg-gray-700 hover:text-white transition-colors"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
        )}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-white hover:underline"
          >
            {isLogin ? 'Don’t have an account? Sign Up' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginsignuppage;
