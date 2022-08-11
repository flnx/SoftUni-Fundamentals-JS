function solve(arr) {
  let newArr = arr.map(Number);
  let workers = newArr.filter((el) => el < 30).length;

  let totalMaterial = 0;
  let dailyMaterialSpent = [];

  while (workers !== 0) {
    let dailyMaterialUsed = 0;

    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] !== 30) {
        newArr[i]++;
        dailyMaterialUsed += 195;
        if (newArr[i] == 30) {
          workers--;
        }
      }
    }

    totalMaterial += dailyMaterialUsed;
    dailyMaterialSpent.push(dailyMaterialUsed);
  }

  totalMaterial = `${totalMaterial * 1900} pesos`;

  console.log(dailyMaterialSpent.join(', '));
  console.log(totalMaterial);
}

solve([21, 25, 28]);
