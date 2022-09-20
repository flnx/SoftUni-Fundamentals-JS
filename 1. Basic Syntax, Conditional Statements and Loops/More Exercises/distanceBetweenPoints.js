function solve(x1, y1, x2, y2) {
  // we will use pythagorean theorem
  // a^2 + b^2 = c^2
  // a & b are both sides of 90 deg triangle
  // c = Math.Sqrt(x^2 + b^2)
  // is the hypotenuse

  let a = Math.abs(x1 - x2);
  let b = Math.abs(y1 - y2);

  // distance is "c"
  let distance = Math.sqrt(a * a + b * b);
  console.log(distance);
}

solve(2, 4, 5, 0);
// let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// console.log(distance);
