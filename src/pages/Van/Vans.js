import React from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <div className="vans">
      {vans.map((van) => {
        return (
          <div className="van">
            <img src={van.imageUrl} alt={van.name} />
            <div className="van-info">
              <p>{van.name}</p>
              <p>${van.price}/day</p>
            </div>
            <Link to={`/vans/${van.id}`}>{van.type}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Vans;
