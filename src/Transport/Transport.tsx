import { Outlet } from "react-router-dom"
import { NavigationBar } from "../components/NavigationBar"
import Footer from "../components/Footer"
import { useEffect } from 'react'
import { useAuth } from '../components/AuthProvider'

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
      <NavigationBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Transport
