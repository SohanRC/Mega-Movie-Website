import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
function App() {
  return (
<<<<<<< HEAD
    <div className="overflow-hidden">
=======
    <div className='h-screen w-screen overflow-scroll'>
>>>>>>> f28948b0849b400a9b61b7d67a2f90404e58ea21
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
