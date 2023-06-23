import React from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Van/Vans";
import Layout from "./components/Layout";
import VansItem, { loader as vansDetailLoader } from "./pages/Van/VansItem";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostLayout from "./components/HostLayout";
import HostVansDetails, {
  loader as hostVansDetailLoader,
} from "./pages/Host/HostVansDetails";
import HostVansPricing from "./pages/Host/HostVansPricing";
import HostVansPhotos from "./pages/Host/HostVansPhotos";
import HostVanDetailedInfo from "./pages/Host/HostVanDetailedInfo";
import Error from "./components/Error";
import Login from "./pages/Login";
import { requireAuth } from "./utils";
// import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="vans/:id" element={<VansItem />} loader={vansDetailLoader} />

      <Route path="/host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            await requireAuth();
            return null;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            await requireAuth();
            return null;
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            await requireAuth();
            return null;
          }}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVansDetails />}
          loader={hostVansDetailLoader}
        >
          <Route
            index
            element={<HostVanDetailedInfo />}
            loader={async () => {
              await requireAuth();
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<HostVansPricing />}
            loader={async () => {
              await requireAuth();
              return null;
            }}
          />
          <Route
            path="photos"
            element={<HostVansPhotos />}
            loader={async () => {
              await requireAuth();
              return null;
            }}
          />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  // Example site - https://vans-life-app.netlify.app/
  return <RouterProvider router={router} />;
}

export default App;
