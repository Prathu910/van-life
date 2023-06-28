import React from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVan } from "../../api";

export function loader({ params }) {
  return defer({ vanDetail: getVan(params.id) });
}

const VansItem = () => {
  const dataPromise = useLoaderData();
  const location = useLocation();

  const goBackLink = location.state?.search || "";
  const goBackText = location.state?.type || "All";

  return (
    <div className="details">
      <Link to={`..${goBackLink}`} relative="path">
        {`Go back to ${goBackText} vans`}
      </Link>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={dataPromise.vanDetail}>
          {(vanDetail) => {
            return (
              <>
                <img src={vanDetail.imageUrl} alt="img" />
                <button>{vanDetail.type}</button>
                <h1>{vanDetail.name}</h1>
                <h3>${vanDetail.price}/Day</h3>
                <p>{vanDetail.description}</p>
                <button className="rent-btn">Rent This Van</button>
              </>
            );
          }}
        </Await>
      </React.Suspense>
    </div>
  );
};

export default VansItem;
