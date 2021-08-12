import React from "react";

export default function Composition(props) {
  function createUnitImage(unit) {
    if (unit.carry) {
      return (
        <img
          className="comp-carry-unit-image"
          width="10%"
          src={unit.img}
          alt={unit.name}
        />
      );
    } else {
      return (
        <img
          className="comp-unit-image"
          width="10%"
          src={unit.img}
          alt={unit.name}
        />
      );
    }
  }
  function createItemImage(unit) {
    return <img className="comp-item-image" src={unit.img} alt={unit.name} />;
  }

  return (
    <div className="comp">
      <h1>{props.teamName}</h1>
      <h3>Score: {props.score}</h3>
      <div className="comp-units">
        <h2>Units:</h2>
        {props.unitArray.map(createUnitImage)}
      </div>
      <div className="comp-items">{props.itemArray.map(createItemImage)}</div>
    </div>
  );
}
