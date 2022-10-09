function solve(arr) {
  let target = arr[0];

  let cut = (n) => n / 4;
  let lap = (n) => n * 0.8;
  let grind = (n) => n - 20;
  let etch = (n) => n - 2;
  let xRay = (n) => n + 1;

 

  for (let i = 1; i < arr.length; i++) {
    let currentCrystal = arr[i];
    let cutCounter = 0;
    let lapCounter = 0;
    let grindCounter = 0;
    let etchCounter = 0;

    console.log(`Processing chunk ${arr[i]} microns`);

    while (currentCrystal !== target) {
      while (currentCrystal / 4 >= target) {
        currentCrystal = cut(currentCrystal);
        cutCounter++;
      }

      if (cutCounter > 0) {
        console.log(`Cut x${cutCounter}`);
        console.log(`Transporting and washing`);
        currentCrystal = Math.floor(currentCrystal);
      }

      while (currentCrystal * 0.8 >= target) {
        currentCrystal = lap(currentCrystal);
        lapCounter++;
      }

      if (lapCounter > 0) {
        console.log(`Lap x${lapCounter}`);
        console.log(`Transporting and washing`);
        currentCrystal = Math.floor(currentCrystal);
      }

      while (currentCrystal - 20 >= target) {
        currentCrystal = grind(currentCrystal);
        grindCounter++;
      }

      if (grindCounter > 0) {
        console.log(`Grind x${grindCounter}`);
        console.log(`Transporting and washing`);
        currentCrystal = Math.floor(currentCrystal);
      }

      while (currentCrystal - 2 >= target - 1) {
        currentCrystal = etch(currentCrystal);
        etchCounter++;
      }

      if (etchCounter > 0) {
        console.log(`Etch x${etchCounter}`);
        console.log(`Transporting and washing`);
        currentCrystal = Math.floor(currentCrystal);
      }

      if (currentCrystal < target) {
        currentCrystal = xRay(currentCrystal);
        console.log(`X-ray x1`);
      }
    }

    console.log(`Finished crystal ${currentCrystal} microns`);
  }
}
solve([1000, 4000, 8100]);