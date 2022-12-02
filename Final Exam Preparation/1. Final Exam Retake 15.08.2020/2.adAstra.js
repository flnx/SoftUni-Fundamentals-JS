function adAstra(arr) {
  const regex = /(#|\|)([a-zA-Z\s]+)\1?\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/gm;

  let m;
  let totalCalories = 0;
  let result = [];

  while ((m = regex.exec(arr)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    let food = m[2];
    let expDate = m[3];
    let calories = Number(m[4]);
    totalCalories += calories;

    result.push(`Item: ${food}, Best before: ${expDate}, Nutrition: ${calories}`);
  }

  console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
  console.log(result.join('\n'));
}
adAstra([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|50||Not right|6.8.20|5|',
]);

// You have food to last you for: 2 days!
// Item: Bread, Best before: 19/03/21, Nutrition: 4000
// Item: Apples, Best before: 08/10/20, Nutrition: 200
// Item: Carrots, Best before: 06/08/20, Nutrition: 50