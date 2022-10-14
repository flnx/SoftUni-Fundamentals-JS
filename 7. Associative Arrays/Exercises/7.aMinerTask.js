function aMinerTask(arr) {
  let materials = {};

  for (let i = 0; i < arr.length; i += 2) {
    let material = arr[i];
    let quantity = Number(arr[i + 1]);

    if (!materials.hasOwnProperty(material)) {
      materials[material] = quantity;
    } else {
      materials[material] += quantity;
    }
  }
  Object.entries(materials).forEach(([a, b]) => console.log(`${a} -> ${b}`));
}

aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);

// gold -> 170
// silver -> 10
// copper -> 17
