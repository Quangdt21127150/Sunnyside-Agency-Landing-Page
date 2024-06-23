import React from "react";
import benefitArr from "../../data/benefitsData";
import "./Benefits.scss";

export default function Benefits() {
  return (
    <ul className="benefits">
      {benefitArr.map((benefit) => (
        <li key={benefit.id}>
          <img
            src={
              window.innerWidth < 768 ? benefit.srcMobile : benefit.srcDestop
            }
            alt={benefit.alt}
            className="benefit-img"
          />
          <div className="benefit-content">
            <h2>{benefit.title}</h2>
            <p>{benefit.description}</p>
            <button
              className="btn-more"
              style={{ borderBottom: benefit.color }}
            >
              Learn more
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
