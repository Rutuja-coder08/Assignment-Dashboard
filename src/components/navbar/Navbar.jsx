import React from "react";
import "./Navbar.css";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <div className="breadcrumb">
        Home &gt; <span>Dashboard</span>
      </div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search widgets name across all categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
