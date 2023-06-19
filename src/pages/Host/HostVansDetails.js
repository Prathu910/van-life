import React from "react";
import { Link, useParams } from "react-router-dom";

const HostVansDetails = () => {
  const params = useParams();

  const [hostVanDetail, setHostVanDetail] = React.useState([]);

  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostVanDetail(data.vans));
  }, []);

  return (
    <div className="host-van-details">
      <Link to="vans">Back to all vans</Link>
      <div className="host-van-moreInfo">
        <img src={hostVanDetail.imageUrl} alt="host-van" />
        <div className="info">
          <button>{hostVanDetail.type}</button>
          <h3>{hostVanDetail.name}</h3>
          <p>{`$${hostVanDetail.price}/day`}</p>
        </div>
      </div>
    </div>
  );
};

export default HostVansDetails;
