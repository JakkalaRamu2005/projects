import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
