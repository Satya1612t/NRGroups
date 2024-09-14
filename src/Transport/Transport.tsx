import { Outlet } from "react-router-dom"
import { NavigationBar } from "../components/NavigationBar"
import Footer from "../components/Footer"

const Transport = () => {
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
