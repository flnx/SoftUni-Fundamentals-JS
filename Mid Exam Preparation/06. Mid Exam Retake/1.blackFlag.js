function blackFlag(arr) {
  let [days, plunder, expectedPlunder] = arr.map(Number);
  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    totalPlunder += plunder;

    if (i % 3 == 0) {
      totalPlunder += (plunder * 0.5);
    }
    
    if (i % 5 == 0) {
      totalPlunder *= 0.7;
    }
  }
  if (totalPlunder >= expectedPlunder) {
    return `Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`;
  }

  let percentage = (totalPlunder / expectedPlunder) * 100
  return `Collected only ${percentage.toFixed(2)}% of the plunder.`;
}
console.log(blackFlag(['5', '40', '100'])); // Ahoy! 154.00 plunder gained.
console.log(blackFlag(['10', '20', '380'])); // Ahoy! 154.00 plunder gained.
