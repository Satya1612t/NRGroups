import { Outlet } from "react-router-dom"
import { useEffect } from 'react'
import { useAuth } from '../components/AuthProvider'
import Navbar from "@/components/Navbar"

const Transport = () => {
  const { isAuthenticated, fetchUserDetails } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !isAuthenticated) {
      fetchUserDetails(token);
    }
  }, [isAuthenticated, fetchUserDetails]);

  return (
    <div className="w-full h-screen bg-slate-50">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Transport
