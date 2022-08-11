function solve(arr) {
  let newArray = [];

  for (let el of arr) {
    if (el < 0) {
      newArray.unshift(el);
    } else {
      newArray.push(el);
    }
  }

  console.log(newArray.join('\n'));
}
solve(['7', '-2', '8', '9']);
// solve(['3', '-2', '0', '-1']);
