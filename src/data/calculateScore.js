export default function calculateScore(composition, inventory) {
  // take all of the Best In Slot items,
  // and fill an array with the components of those items
  let componentArray = [];
  for (let i = 0; i < composition.itemArray.length; i++) {
    for (let j = 0; j < composition.itemArray[i].components.length; j++) {
      componentArray.push(composition.itemArray[i].components[j]);
    }
  }

  // changes the array into a map, (keys: item, value: occurences)
  const componentMap = componentArray.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );

  // the amount of components will be used as a baseline for the score,
  // so compositions with more Best In Slot items will be weighed the same
  let baseline = componentArray.length;

  // converts the inventory from an object into an array
  const items = Object.entries(inventory);

  // calculates score based on how many times the item
  // appears as a component for a Best In Slot Item
  let score = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i][1].count > 0) {
      let { item, count } = items[i][1];
      if (componentMap.get(item)) {
        score += componentMap.get(item) * count;
      }
    }
  }

  // returns the score after being adjusted by the baseline
  return Math.floor((score / baseline) * 1000) / 10;
}
