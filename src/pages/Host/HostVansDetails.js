import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const HostVansDetails = () => {
  const params = useParams();

  const activeStyle = {
    borderBottom: "2px solid black",
    fontWeight: "bolder",
  };

  const [hostVanDetail, setHostVanDetail] = React.useState([]);

  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostVanDetail(data.vans));
  }, [params.id]);

  return (
    <div className="host-van-details">
      <NavLink to=".." relative="path">
        Back to all vans
      </NavLink>
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
    </div>
  );
};

export default HostVansDetails;
