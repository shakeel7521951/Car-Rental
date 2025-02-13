import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

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
      { path: "/about", element: <AboutUs /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
