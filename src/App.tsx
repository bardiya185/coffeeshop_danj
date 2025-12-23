import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import GalleryPage from "./pages/Gallery/gallery";
import Header from "./Layouts/components/Header/header";
import Footer from "./Layouts/components/Footer/footer";
import Contact from "./pages/Contact_us/contact_us";
import AboutUs from "./pages/About_us/about_us";
import CafeMenuPage from "./pages/Menu/menu";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import ForgotPassword from "./pages/ForgotPassword/forgot_password";

function App() {
  //const loc = useLocation();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Gallery" element={<GalleryPage />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Menu" element={<CafeMenuPage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route  path="/ForgotPassword" element={<ForgotPassword/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
