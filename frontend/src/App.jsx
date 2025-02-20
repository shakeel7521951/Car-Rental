import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Signup";
import EmailOTPForm from "./pages/VerifyOtp";
import About from "./pages/AboutUs";
import Booking from "./pages/Booking";
import VerifyUser from "./pages/VerifyUser";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/services",
        element: <Services />,
      },
      { path: "/booking/:id", element: <Booking /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/about-us", element: <About /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/sign-up", element: <RegisterPage /> },
  { path: "/verify-otp", element: <EmailOTPForm /> },
  { path: "/user-verification", element:<VerifyUser /> },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
