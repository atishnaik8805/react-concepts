import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const About = () => {
  const { section } = useParams();

  return (
    <>
      <h1>Hello from About page</h1>
      <h3>{section}</h3>
      <Link to="/about/partners">Partner Info</Link>
      <Link to="/about/endorsments">Endorsments Info</Link>
    </>
  );
};

export default About;
