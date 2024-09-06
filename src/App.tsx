import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import IT from "./pages/IT"
import Transport from "./pages/Transport"

export const App = () => {
  return(
    <>
    <BrowserRouter>
      <Routes >
        <Route path={'/'} element={<Home />}  />
        <Route path={'/about'} element={<About />}  />
        <Route path={'/it'} element={<IT />}  />
        <Route path={'/transport'} element={<Transport />}  />
      </Routes>
    </BrowserRouter>
    </>
  )
}