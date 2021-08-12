import React, { useState } from "react";
import Composition from "./Composition";
import compositions from "../data/compositions";
import calculateScore from "../data/calculateScore";
import NavBar from "./NavBar";
import ItemBar from "./ItemBar";
import _ from "lodash";

export default function App() {
  const [inventory, setInventory] = useState({
    sword: { item: "B.F. Sword", count: 0 },
    vest: { item: "Chain Vest", count: 0 },
    belt: { item: "Giant's Belt", count: 0 },
    rod: { item: "Needlessly Large Rod", count: 0 },
    cloak: { item: "Negatron Cloak", count: 0 },
    bow: { item: "Recurve Bow", count: 0 },
    glove: { item: "Sparring Glove", count: 0 },
    spatula: { item: "Spatula", count: 0 },
    tear: { item: "Tear of the Goddess", count: 0 }
  });

  function createComposition(comp) {
    const score = calculateScore(comp, inventory);

    return (
      <Composition
        key={comp.id}
        id={comp.id}
        teamName={comp.teamName}
        unitArray={comp.unitArray}
        itemArray={comp.itemArray}
        score={score}
      />
    );
  }

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div className="banner">
        <h1>BestInSlot: TFT Composition Helper</h1>
        <h2>Keep track of your items and see what composition to aim for!</h2>
      </div>
      <div>
        <ItemBar setInventory={setInventory} />
      </div>
      <div>{compositions.map(createComposition)}</div>
    </div>
  );
}
