function solve(arr) {
  let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  sortedArr.forEach((element) => {
    console.log(element);
  });
}

solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
