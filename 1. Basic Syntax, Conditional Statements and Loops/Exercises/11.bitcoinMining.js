function solve(input) {
  let daysCounter = 0;
  let firstPurchase = 0;
  let bitcoinPrice = 11949.16;
  let goldPricePerGram = 67.51;
  let bitcoins = 0;
  let bitcoiner = 0;
  let gold = 0;

  for (let i = 0; i < input.length; i++) {
    daysCounter++;
    let dailyEarnings = input[i];
    let currentBitties = 0;

    if (daysCounter % 3 === 0) {
      dailyEarnings *= 0.7;
    }

    dailyEarnings *= goldPricePerGram;
    gold += dailyEarnings;

    if (gold >= bitcoinPrice) {
      bitcoiner++;
      if (bitcoiner === 1) {
        firstPurchase = i + 1;
      }
      currentBitties = Math.floor(gold / bitcoinPrice);
      gold = gold - bitcoinPrice * currentBitties;
      bitcoins += currentBitties;
    }
  }
  console.log(`Bought bitcoins: ${bitcoins}`);
  if (bitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
  }
  console.log(`Left money: ${gold.toFixed(2)} lv.`);
}
// solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);
