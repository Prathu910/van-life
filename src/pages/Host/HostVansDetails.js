import React from "react";
import { NavLink, Outlet, useLoaderData, defer, Await } from "react-router-dom";
import { getVan } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params }) {
  await requireAuth();
  return defer({ hostVanDetail: getVan(params.id) });
}

const HostVansDetails = () => {
  const dataPromise = useLoaderData();

  const activeStyle = {
    borderBottom: "2px solid black",
    fontWeight: "bolder",
  };

  return (
    <div className="host-van-details">
      <NavLink to=".." relative="path">
        Back to all vans
      </NavLink>
      <React.Suspense fallback={<h2>loading...</h2>}>
        <Await resolve={dataPromise.hostVanDetail}>
          {(hostVanDetail) => {
            return (
              <>
                <div className="host-van-moreInfo">
                  <img src={hostVanDetail.imageUrl} alt="host-van" />
                  <div className="info">
                    <button>{hostVanDetail.type}</button>
                    <h3>{hostVanDetail.name}</h3>
                    <p>{`$${hostVanDetail.price}/day`}</p>
                  </div>
                </div>
                <div className="host-van-detailed-nav">
                  <NavLink
                    to="."
                    end
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    Details
                  </NavLink>
                  <NavLink
                    to="pricing"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    Pricing
                  </NavLink>
                  <NavLink
                    to="Photos"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    Photos
                  </NavLink>
                </div>
                <Outlet context={hostVanDetail} />
              </>
            );
          }}
        </Await>
      </React.Suspense>
    </div>
  );
};

export default HostVansDetails;
