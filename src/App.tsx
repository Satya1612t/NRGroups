import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import IT from "./pages/IT"
import Transport from "./Transport/Transport"
import Registration from "./Transport/pages/Registration"
import TransportHome from "./Transport/pages/TransportHome"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path={'/'} element={<Home />} />
          <Route path={'about'} element={<About />} />
          <Route path={'it'} element={<IT />} />
          <Route path={'transport'} element={<Transport />} >
              <Route index element={<TransportHome />} />
              <Route path="registration" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}