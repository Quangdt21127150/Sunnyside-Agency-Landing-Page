import React from "react";
import Benefits from "./Benefits/Benefits";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import Images from "./Images/Images";

export default function Main() {
  return (
    <main className="main">
      <Benefits />
      <Services />
      <Testimonials />
      <Images />
    </main>
  );
}
