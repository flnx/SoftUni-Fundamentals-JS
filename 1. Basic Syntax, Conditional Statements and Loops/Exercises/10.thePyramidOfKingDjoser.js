function solve(base, height) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let stepsCounter = 1;

  for (let i = base; i >= 1; i -= 2) {
    let totalBase = i - 2;

    // shit doesn't correct without this "IF"
    if (totalBase > 0) {
      stone += totalBase * totalBase * height; // the god damn stones

      // every 5th step - lapis lazuli
      if (stepsCounter % 5 === 0) {
        lapisLazuli += (i * 4 - 4) * height; // lapis
      } else {
        marble += (i * 4 - 4) * height; //  shitty marble
      }
      stepsCounter++;
    }
    gold = i * i * height; // gold on top ofc
  }

  let calcHeight = height * stepsCounter;

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(calcHeight)}`);
}

solve(11, 1);

// output:

// Stone required: 165
// Marble required: 112
// Lapis Lazuli required: 8
// Gold required: 1
// Final pyramid height: 6
