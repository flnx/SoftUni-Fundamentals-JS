function solve(base, height) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let stepsCounter = 1;

  for (let i = base; i > 0; i -= 2) {
    let totalBase = i - 2;

    // this shit goes wrong without this "IF"
    if (totalBase > 0) {
      let calcStones = totalBase * totalBase * height; // the god damn stone formula
      stone += calcStones;

      // every 5th step - lapis lazuli
      if (stepsCounter % 5 === 0) {
        let calcLapis = (i * 4 - 4) * height; // lapis lazuli formula
        lapisLazuli += calcLapis;
      } else {
        let marbleFormula = (i * 4 - 4) * height; // yes, the marble formula.
        marble += marbleFormula;
      }
      stepsCounter++;
    }
    gold = i * i * height; // gold on top ofc
  }
  // fuck math
  let calcHeight = height * stepsCounter;

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(calcHeight)}`);
}

solve(11, 0.75);

// output:

// Stone required: 165
// Marble required: 112
// Lapis Lazuli required: 8
// Gold required: 1
// Final pyramid height: 6
