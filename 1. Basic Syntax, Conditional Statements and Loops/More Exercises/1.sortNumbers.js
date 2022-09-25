function solve(a, b, c) { 
  // sorted by using conditional statements
  if (a >= b && a >= c && b >= c) {
    console.log(a);
    console.log(b);
    console.log(c);
  } else if (a >= b && a >= c && b <= c) {
    console.log(a);
    console.log(c);
    console.log(b);
  } else if (b >= a && b >= c && a >= c) {
    console.log(b);
    console.log(a);
    console.log(c);
  } else if (b >= a && b >= c && a <= c) {
    console.log(b);
    console.log(c);
    console.log(a);
  } else if (c >= a && c >= b && a >= b) {
    console.log(c);
    console.log(a);
    console.log(b);
  } else if (c >= a && c >= b && a <= b) {
    console.log(c);
    console.log(b);
    console.log(a);
  }
}

solve(2, 555, 34);

// 555
// 34
// 2
