import React from "react";
import "./DashboardHeader.css";

const DashboardHeader = ({ setModalOpen }) => {
  return (
    <div className="dashboard-header">
      <h2>CNAPP Dashboard</h2>
      <div className="dashboard-header-btn">
        <button
          className="global-add-widget-btn"
          onClick={() => setModalOpen(true)}
        >
          Add Widget <span> + </span>
        </button>
        <button className="global-add-widget-btn">Refresh</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
