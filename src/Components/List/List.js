import React from "react";

function List({ name, description }) {
  return (
    <>
      <h2 className="headers">{name}</h2>
      <p claassName="parag">{description}</p>
    </>
  );
}

export default List;
