function solve(arr) {
  const data = arr.map(Number);

  const dailyBiscuits = data[0];
  const workers = data[1];
  const otherFactory = data[2];
  let myFactory = 0;

  for (let i = 1; i <= 30; i++) {
    let totalDailyProd = dailyBiscuits * workers;
    if (i % 3 == 0) {
      totalDailyProd *= 0.75;
    }
    myFactory += Math.floor(totalDailyProd);
  }

  const minNum = Math.min(otherFactory, myFactory);
  const maxNum = Math.max(otherFactory, myFactory);

  const diff = maxNum - minNum;
  let result;

  console.log(`You have produced ${myFactory} biscuits for the past month.`);

  if (myFactory > otherFactory) {
    result = (diff / minNum) * 100;
    console.log(`You produce ${result.toFixed(2)} percent more biscuits.`);
    return;
  }

  result = (diff / maxNum) * 100;
  console.log(`You produce ${result.toFixed(2)} percent less biscuits.`);
}
solve(['78', '8', '16000']);

// -78 biscuits a day
// -8 employees
// -17160 biscuit production your factory (keep in mind every third day the workers produce only 75% of the usual production)
// -17160 – 16000 = 1160 - difference between your and the other factory production
// -1160/16000 * 100 = 7.25% more biscuits.

solve(['65', '12', '26000']);

// -65 biscuits a day
// -12 employees
// -21450 biscuit production your factory
// -26000 – 21450 = 4550 - difference between your and the other factory production
// -4550/26000 * 100 = 17.50% less biscuits.

// solve(['163', '16', '67020']);
