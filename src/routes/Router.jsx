import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import DoctorDetails from "../pages/Doctor/DoctorDetails";
import Doctors from "../pages/Doctor/Doctors";
import FindDoctor from "../pages/FindDoctor";
import ServiceList from "/SDP/frontend/src/components/Services/ServiceList";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter basename="/doctors">
      <Routes>
        <Route path = "/" element={<Home/>}/>
        {/* <Route path = "/home" element={<Home/>}/> */}
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/serviceList" element={<ServiceList />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
