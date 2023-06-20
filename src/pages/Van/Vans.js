import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const vanType = searchParams.get("type");

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const filteredVans = vanType
    ? vans.filter((van) => vanType === van.type)
    : vans;

  if (!vans.length) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="vans-container">
      <h2>Explore Our Vans Options</h2>

      <div className="vans-filter">
        <button onClick={() => setSearchParams({ type: "simple" })}>
          Simple
        </button>
        <button onClick={() => setSearchParams({ type: "luxury" })}>
          Luxury
        </button>
        <button onClick={() => setSearchParams({ type: "rugged" })}>
          Rugged
        </button>
        {vanType && (
          <button className="clear-filter" onClick={() => setSearchParams({})}>
            Clear Filter
          </button>
        )}
      </div>

      <div className="vans">
        {filteredVans.map((van) => {
          return (
            <div className="van" key={van.id}>
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
    </div>
  );
};

export default Vans;
