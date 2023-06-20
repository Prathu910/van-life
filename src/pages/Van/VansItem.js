import React from "react";
import { Link, useParams } from "react-router-dom";

const VansItem = () => {
  const params = useParams();
  const [vanDetail, setVanDetail] = React.useState({});

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans));
  }, [params.id]);

  return (
    <div className="details">
      <Link to=".." relative="path">
        Go back to vans
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
