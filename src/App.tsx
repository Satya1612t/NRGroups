import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import IT from "./pages/IT"
import Transport from "./Transport/Transport"
import Partnership from "./Transport/pages/Partnership"
import TransportHome from "./Transport/pages/TransportHome"
import VehicleRegistration from "./Transport/pages/VehicleRegistration"
import Signup from "./Transport/pages/Signup"
import Signin from "./Transport/pages/Signin"
import RealEstate from "./RealEstate/RealEstate"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path={'/'} element={<Home />} />
          <Route path={'about'} element={<About />} />
          <Route path={'it'} element={<IT />} />
          <Route path={'real_estate'} element={<RealEstate />} />
          <Route path={'transport'} element={<Transport />} >
            <Route index element={<TransportHome />} />
            <Route path="partnership" element={<Partnership />} />
            <Route path="vehicle-register" element={<VehicleRegistration />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}