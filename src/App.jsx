import "./app.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import React from "react";
import ServiceList from "./components/Services/ServiceList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import DoctorDetails from "./pages/Doctor/DoctorDetails";
import FindDoctor from "./pages/FindDoctor";
import Bgvdo from "./components/Bgvdo";
import Admin from "./pages/Admin";
import Loader from "./components/Loader";
import TrialLoad from "./pages/TrialLoad";
import SearchLocation from "./components/Location/SearchLocation";
import FindLocation from "./pages/FindLocation";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path = "/home" element={<Home/>}/> */}
        <Route path="/findoctor/:city" element={<FindDoctor />}/>
        <Route path="/findoctor" element={<FindDoctor />} />
        <Route path="/serviceList" element={<ServiceList />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bgvdo" element={<Bgvdo />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/load" element={<Loader />} />
        <Route path="/trial" element={<TrialLoad />} />
        <Route path="/location" element={<FindLocation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
