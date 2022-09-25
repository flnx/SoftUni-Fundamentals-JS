function solve(num) {
  num = Number(num);

  for (let a = 0; a < num; a++) {
    for (let b = 0; b < num; b++) {
      for (let c = 0; c < num; c++) {
        let allNums = String.fromCharCode(97 + a, 97 + b, 97 + c);
        console.log(allNums);
      }
    }
  }
}

solve('3');
