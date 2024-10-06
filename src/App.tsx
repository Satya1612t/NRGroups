
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Transport from "./Transport/Transport";
import Partnership from "./Transport/pages/Partnership";
import TransportHome from "./Transport/pages/TransportHome";
import Signup from "./Transport/pages/Signup";
import Signin from "./Transport/pages/Signin";
import RealEstate from "./RealEstate/RealEstate";
import Realestatehome from "./RealEstate/pages/Realestatehome";
import Buypropertiespage from "./RealEstate/pages/Buypropertiespage";
import Loginsignuppage from "./RealEstate/pages/Loginsignuppage";
import AddPropertyPage from "./RealEstate/pages/Addpropertypage";
import { Toaster } from "react-hot-toast";
import RoleSelection from "./RealEstate/pages/RoleSelection";
import ProfileForm from "./RealEstate/pages/ProfileForm";
import Registration from "./Transport/pages/Registration"
import ProtectedRoute from "./components/ProtectedRoutes"
import { AuthProvider } from "./components/AuthProvider"
import Dashboard from "./components/Dashboard";
import MenuProvider from "./components/MenuProvider";

export const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider >
        <MenuProvider>

          {/* <NavigationBar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="realestate" element={<RealEstate />}>
              <Route index element={<Realestatehome />} />
              <Route path="properties-list" element={<Buypropertiespage />} />
              <Route path="add-properties-sell" element={<AddPropertyPage />} />
              <Route path="loginpage" element={<Loginsignuppage />} />
              <Route path="roleselection" element={<RoleSelection />} />
              <Route path="roleselection/profile-form" element={<ProfileForm />} />
            </Route>

            <Route path={'transport'} element={<Transport />} >
              <Route index element={<TransportHome />} />
              <Route path="partnership" element={<Partnership />} />
              <Route path="signup" element={<Signup />} />
              <Route path="signin" element={<Signin />} />
              <Route element={<ProtectedRoute />}>
                <Route path='register' element={<Registration />} />
                <Route path="dash" element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
          <Toaster />
        </MenuProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

