import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import IT from "./pages/IT"
import Transport from "./Transport/Transport"
import Partnership from "./Transport/pages/Partnership"
import TransportHome from "./Transport/pages/TransportHome"
import Signup from "./Transport/pages/Signup"
import Signin from "./Transport/pages/Signin"
import RealEstate from "./RealEstate/RealEstate"
import Registration from "./Transport/pages/Registration"
import ProtectedRoute from "./components/ProtectedRoutes"
import { AuthProvider } from "./components/AuthProvider"

export const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes >
            <Route path={'/'} element={<Home />} />
            <Route path={'about'} element={<About />} />
            <Route path={'it'} element={<IT />} />
            <Route path={'real_estate'} element={<RealEstate />} />
            <Route path={'transport'} element={<Transport />} >
              <Route index element={<TransportHome />} />
              <Route path="partnership" element={<Partnership />} />
              <Route path="signup" element={<Signup />} />
              <Route path="signin" element={<Signin />} />
              <Route element={<ProtectedRoute />}>
                <Route path='register' element={<Registration />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}
