function solve(x, y, z) {
  let popUp = '';

  if (
    (x > 0 && y > 0 && z > 0) ||
    (x > 0 && z > 0 && y > 0) ||
    (z > 0 && y > 0 && x > 0) ||
    (z > 0 && x > 0 && y > 0) ||
    (y > 0 && x > 0 && z > 0) ||
    (y > 0 && z > 0 && x > 0)
  ) {
    popUp = 'Positive';
  } else if (
    (x > 0 && y > 0 && z < 0) ||
    (x > 0 && z > 0 && y < 0) ||
    (z > 0 && y > 0 && x < 0) ||
    (z > 0 && x > 0 && y < 0) ||
    (y > 0 && x > 0 && z < 0) ||
    (y > 0 && z > 0 && x < 0)
  ) {
    popUp = 'Negative';
  } else if (
    (x > 0 && y < 0 && z < 0) ||
    (x > 0 && z < 0 && y < 0) ||
    (z > 0 && y < 0 && x < 0) ||
    (z > 0 && x < 0 && y < 0) ||
    (y > 0 && x < 0 && z < 0) ||
    (y > 0 && z < 0 && x < 0)
  ) {
    popUp = 'Positive';
  } else if (
    (x < 0 && y < 0 && z < 0) ||
    (x < 0 && z < 0 && y < 0) ||
    (z < 0 && y < 0 && x < 0) ||
    (z < 0 && x < 0 && y < 0) ||
    (y < 0 && x < 0 && z < 0) ||
    (y < 0 && z < 0 && x < 0)
  ) {
    popUp = 'Negative';
  }

  console.log(popUp);
}
solve(5, 12, -15);

function solve(x, y, z) {
  let popUp = '';
  if (x > 0 && y > 0 && z > 0) {
    popUp = 'Positive';
  } else if (x < 0 && y < 0 && z < 0) {
    popUp = 'Negative';
  } else if (
    (x > 0 && y > 0 && z < 0) ||
    (x > 0 && z > 0 && y < 0) ||
    (z > 0 && y > 0 && x < 0) ||
    (z > 0 && x > 0 && y < 0) ||
    (y > 0 && x > 0 && z < 0) ||
    (y > 0 && z > 0 && x < 0)
  ) {
    popUp = 'Negative';
  } else if (
    (x > 0 && y < 0 && z < 0) ||
    (x > 0 && z < 0 && y < 0) ||
    (z > 0 && y < 0 && x < 0) ||
    (z > 0 && x < 0 && y < 0) ||
    (y > 0 && x < 0 && z < 0) ||
    (y > 0 && z < 0 && x < 0)
  ) {
    popUp = 'Positive';
  }

  // console.log(popUp);
}
solve(5, 12, -15);
