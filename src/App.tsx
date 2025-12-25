import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
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
import NotFound from "./pages/NotFound/not_found";

function MainLayout() {
  return (
    <>
      <Header /> <Outlet /> {/* اینجا محتوای هر صفحه رندر میشه */} <Footer />
    </>
  );
}
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<GalleryPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Menu" element={<CafeMenuPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
