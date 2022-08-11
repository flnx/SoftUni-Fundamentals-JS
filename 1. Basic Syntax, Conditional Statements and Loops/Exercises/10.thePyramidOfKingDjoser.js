function solve(base, height) {
  //pyramid base
  let h = 0;

  //materials
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;

  let counter = 0;

  for (let i = base; i >= 1; i -= 2) {
    h++;
    counter++;
    let totalBase = i - 2;

    // Calc Required Stone. This if is required because when I subtract 2 of each itteration (width/height), the last itteration gives a negative number or zero that I don't need.
    if (totalBase > 0) {
      stone += totalBase * totalBase * height;

      if (counter === 5) {
        // calc lapis lazuli
        lapisLazuli += (i * 4 - 4) * height;
        counter = 0;
      } else if (counter < 5) {
        // calc marble
        marble += (i * 4 - 4) * height;
      }
    }
    // calc gold
    gold = i;
  }

  stone = Math.ceil(stone);
  marble = Math.ceil(marble);
  lapisLazuli = Math.ceil(lapisLazuli);
  gold = Math.ceil(gold * gold * height);
  let calcHeight = Math.floor(height * h);

  console.log(`Stone required: ${stone}`);
  console.log(`Marble required: ${marble}`);
  console.log(`Lapis Lazuli required: ${lapisLazuli}`);
  console.log(`Gold required: ${gold}`);
  console.log(`Final pyramid height: ${calcHeight}`);

  // calc height of the pyramid
}

solve(12, 1);
