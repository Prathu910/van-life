import React from "react";

const Income = () => {
  return (
    <div className="income-container">
      <div className="income">
        <h1>Income</h1>
        <p>
          Last <span>30 days</span>
        </p>
        <h1>$2,260</h1>
      </div>
      <div className="transaction-report">
        <h2>Your transactions (3)</h2>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <div className="transactions">
        <div className="transaction">
          <h2>$720</h2>
          <p>Jan 3, '23</p>
        </div>
        <div className="transaction">
          <h2>$560</h2>
          <p>Dec 12, '22</p>
        </div>
        <div className="transaction">
          <h2>$980</h2>
          <p>Dec 1, '22</p>
        </div>
      </div>
    </div>
  );
};

export default Income;
