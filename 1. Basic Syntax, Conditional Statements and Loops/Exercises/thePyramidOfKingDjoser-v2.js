function solve(base, height) {
  const mats = { stone: 0, marble: 0, lapisLazuli: 0, gold: 0 };
  let stepsCounter = 1;

  for (let i = base; i >= 1; i -= 2) {
    let calcBase = i - 2;
    const calcStones = calcBase * calcBase * height;

    if (calcBase > 0) {
      mats.stone += calcStones;

      if (stepsCounter % 5 == 0) {
        const calcLapis = (i * 4 - 4) * height;
        mats.lapisLazuli += calcLapis;
      } else {
        const calcMarble = (i * 4 - 4) * height;
        mats.marble += calcMarble;
      }

      stepsCounter++;
    }
    mats.gold = i * i * height;
  }
  const pyramidHeight = stepsCounter * height;
  console.log(`Stone required: ${Math.ceil(mats.stone)}`);
  console.log(`Marble required: ${Math.ceil(mats.marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(mats.lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(mats.gold)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}

solve(11, 1);

// output:

// Stone required: 165
// Marble required: 112
// Lapis Lazuli required: 8
// Gold required: 1
// Final pyramid height: 6
