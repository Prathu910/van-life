import React from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [hostVans, setHostVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  return (
    <div className="host-vans">
      <h2>Your Listed Vans</h2>
      {hostVans.map((van) => {
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
      })}
    </div>
  );
};

export default HostVans;
