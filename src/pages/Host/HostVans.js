import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader() {
  await requireAuth();
  return getHostVans();
}

const HostVans = () => {
  const hostVans = useLoaderData();

  const vansHtml = hostVans.map((van) => {
    return (
      <Link to={`${van.id}`}>
        <div className="host-van">
          <img src={van.imageUrl} alt="host-van" />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>{`$${van.price}/day`}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="host-vans">
      <h2>Your Listed Vans</h2>
      {vansHtml}
    </div>
  );
};

export default HostVans;
