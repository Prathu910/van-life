import React from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader() {
  await requireAuth();
  return defer({ hostVans: getHostVans() });
}

const HostVans = () => {
  const dataPromise = useLoaderData();

  return (
    <div className="host-vans">
      <h2>Your Listed Vans</h2>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={dataPromise.hostVans}>
          {(hostVans) => {
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
            return <>{vansHtml}</>;
          }}
        </Await>
      </React.Suspense>
    </div>
  );
};

export default HostVans;
