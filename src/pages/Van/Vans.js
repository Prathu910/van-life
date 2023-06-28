import React from "react";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return defer({ vans: getVans() });
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const vansPromise = useLoaderData();
  const vanType = searchParams.get("type");

  function renderVans(vans) {
    const filteredVans = vanType
      ? vans.filter((van) => vanType === van.type)
      : vans;
    const vansElement = filteredVans.map((van) => {
      return (
        <div className="van" key={van.id}>
          <img src={van.imageUrl} alt={van.name} />
          <div className="van-info">
            <p>{van.name}</p>
            <p>${van.price}/day</p>
          </div>
          <Link
            to={`/vans/${van.id}`}
            state={{
              search: `?${searchParams.toString()}`,
              type: vanType,
            }}
          >
            {van.type}
          </Link>
        </div>
      );
    });
    return (
      <>
        <div className="vans-filter">
          <button
            className={vanType === "simple" ? `clicked` : ""}
            onClick={() => {
              return setSearchParams({ type: "simple" });
            }}
          >
            Simple
          </button>
          <button
            className={vanType === "luxury" ? `clicked` : ""}
            onClick={() => {
              return setSearchParams({ type: "luxury" });
            }}
          >
            Luxury
          </button>
          <button
            className={vanType === "rugged" ? `clicked` : ""}
            onClick={() => {
              return setSearchParams({ type: "rugged" });
            }}
          >
            Rugged
          </button>
          {vanType && (
            <button
              className="clear-filter"
              onClick={() => setSearchParams({})}
            >
              Clear Filter
            </button>
          )}
        </div>

        <div className="vans">{vansElement}</div>
      </>
    );
  }

  return (
    <div className="vans-container">
      <h2>Explore Our Vans Options</h2>
      <React.Suspense fallback={<h2>Loading....</h2>}>
        <Await resolve={vansPromise.vans}>{renderVans}</Await>
      </React.Suspense>
    </div>
  );
};

export default Vans;
