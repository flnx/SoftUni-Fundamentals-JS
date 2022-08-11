function solve(side1, side2, side3) {
  let x = (side1 + side2 + side3) / 2;

  let area = Math.sqrt(x * ((x - side1) * (x - side2) * (x - side3)));
  console.log(area);
}

solve(2, 3.5, 4);
