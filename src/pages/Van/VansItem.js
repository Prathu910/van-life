import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const VansItem = () => {
  const params = useParams();
  const [vanDetail, setVanDetail] = React.useState({});
  const location = useLocation();

  const goBackLink = location.state?.search || "";
  const goBackText = location.state?.type || "All";

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans));
  }, [params.id]);

  return (
    <div className="details">
      <Link to={`..${goBackLink}`} relative="path">
        {`Go back to ${goBackText} vans`}
      </Link>
      <img src={vanDetail.imageUrl} alt="img" />
      <button>{vanDetail.type}</button>
      <h1>{vanDetail.name}</h1>
      <h3>${vanDetail.price}/Day</h3>
      <p>{vanDetail.description}</p>
      <button className="rent-btn">Rent This Van</button>
    </div>
  );
};

export default VansItem;
