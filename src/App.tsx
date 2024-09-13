import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import IT from "./pages/IT"
import Transport from "./Transport/Transport"
import Partnership from "./Transport/pages/Partnership"
import TransportHome from "./Transport/pages/TransportHome"
import Register from "./Transport/pages/Register"
import RealEstate from "./RealEstate/RealEstate"
import Realestatehome from "./RealEstate/pages/Realestatehome"
import Buypropertiespage from "./RealEstate/pages/Buypropertiespage"


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path={'/'} element={<Home />} />
          <Route path={'about'} element={<About />} />
          <Route path={'it'} element={<IT />} />

          <Route path={'realestate'} element={<RealEstate />}>
             
            <Route index element={<Realestatehome />} />
            <Route path="properties-list" element={<Buypropertiespage />} />
          
          </Route>

          <Route path={'transport'} element={<Transport />} >
          
              <Route index element={<TransportHome />} />
              <Route path="partnership" element={<Partnership />} />
              <Route path="register" element={ <Register />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}