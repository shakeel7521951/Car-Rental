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
import MyProfile from "./pages/MyProfile";
import UpdatePassword from "./pages/UpdatePassword";

import Sidebar from "./components/dashboard/common/Sidebar";
import OverviewPage from "./pages/dashboard/OverviewPage";
// import ProductsPage from "./pages/dashboard/ProductsPage";
// import UsersPage from "./pages/dashboard/UsersPage";
// import SalesPage from "./pages/dashboard/SalesPage";
// import OrdersPage from "./pages/dashboard/OrdersPage";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/booking/:id", element: <Booking /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/about-us", element: <About /> },
      { path: "/my-profile", element: <MyProfile /> },
      { path: "/update-password", element: <UpdatePassword /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/sign-up", element: <RegisterPage /> },
  { path: "/verify-otp", element: <EmailOTPForm /> },
  { path: "/user-verification", element: <VerifyUser /> },
  {
    element: <AdminLayout />,
    children: [
      { path: "/dashboard", element: <OverviewPage /> },
      // { path: "/products", element: <ProductsPage /> },
      // { path: "/users", element: <UsersPage /> },
      // { path: "/sales", element: <SalesPage /> },
      // { path: "/orders", element: <OrdersPage /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
