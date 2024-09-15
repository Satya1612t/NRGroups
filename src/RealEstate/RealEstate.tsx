import { NavigationBar } from "../components/NavigationBar"
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RealEstate = () => {
  return (
    <>
     <div className="w-full h-screen bg-slate-50">
      <NavigationBar /> 
        <div>
          <Outlet />
        </div>
      <Footer />
     </div>
    </>
  )
}
//gfhbjkl


export default RealEstate