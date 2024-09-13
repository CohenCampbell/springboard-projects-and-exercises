import React from "react";
import { useNavigate } from "react-router-dom";

function CompanyCard({ comp }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/companies/${comp.handle}`);
  }

  return (
    <div onClick={handleClick}>
      <h4>{comp.name}</h4>
      <p>{comp.description}</p>
    </div>
  );
}

export default CompanyCard;
