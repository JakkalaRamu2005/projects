import React from "react";
import servicesData from "./ServicesData";
import ServiceCard from "./ServiceCard";
// import "./index.css"; // custom CSS

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">My Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
