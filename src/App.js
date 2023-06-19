import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Van/Vans";
import Layout from "./components/Layout";
import VansItem from "./pages/Van/VansItem";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/Host/HostVans";
import HostLayout from "./components/HostLayout";
import HostVansDetails from "./pages/Host/HostVansDetails";
import HostVansDetailsLayout from "./components/HostVansDetailsLayout";
import HostVansPricing from "./pages/Host/HostVansPricing";
import HostVansPhotos from "./pages/Host/HostVansPhotos";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansItem />} />

          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetailsLayout />}>
              <Route index element={HostVansDetails} />
              <Route path="pricing" element={HostVansPricing} />
              <Route path="photos" element={HostVansPhotos} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
