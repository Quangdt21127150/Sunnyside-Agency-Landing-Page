import React from "react";
import testimonialsList from "../../data/testimonialsData";
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <h2>Client testimonials</h2>
      <ul className="testimonials-list">
        {testimonialsList.map((testimonial) => (
          <li key={testimonial.id}>
            <img
              src={testimonial.src}
              alt={testimonial.alt}
              className="avatar"
            />
            <p>{testimonial.testimonial}</p>
            <div className="user-info">
              <p className="user-name">{testimonial.name}</p>
              <p className="user-job">{testimonial.job}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
