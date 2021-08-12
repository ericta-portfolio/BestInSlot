import React, { useState } from "react";
import components from "../data/components";

export default function ItemBar({ setInventory, getInventory }) {
  const [itemInventory, setItemInventory] = useState({
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

  function increment(event) {
    const itemName = event.target.name;
    itemInventory[itemName].count++;
    setItemInventory({ ...itemInventory });
    setInventory(itemInventory);
  }

  function decrement(event) {
    const itemName = event.target.name;
    if (itemInventory[itemName].count) {
      itemInventory[itemName].count--;
      if (itemInventory[itemName].count < 0) itemInventory[itemName].count = 0;
      setItemInventory({ ...itemInventory });
      setInventory(itemInventory);
    }
  }

  function makeItem(item) {
    return (
      <div className="bar-item">
        <h1 className="bar-item-count">
          {itemInventory[item.nickname].count >= 0 &&
            itemInventory[item.nickname].count}
        </h1>
        <div className="bar-item-img">
          <img src={item.img} alt={item.name} />
        </div>
        <div>
          <button name={item.nickname} onClick={increment}>
            +
          </button>
          <button name={item.nickname} onClick={decrement}>
            <span className="bar-button-text">-</span>
          </button>
        </div>
      </div>
    );
  }

  return <div className="bar">{components.map(makeItem)}</div>;
}
