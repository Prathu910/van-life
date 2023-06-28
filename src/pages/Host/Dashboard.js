import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="income-stats">
        <div className="income">
          <h2>Welcome!</h2>
          <p>Income last 30 days</p>
          <h1>$2260</h1>
        </div>
        <div className="details-link">
          <p>details</p>
        </div>
      </div>
      <div className="reviews-stat">
        <h2>
          Review Score <span>5.0/5</span>
        </h2>
        <p>details</p>
      </div>
    </div>
  );
};

export default Dashboard;
