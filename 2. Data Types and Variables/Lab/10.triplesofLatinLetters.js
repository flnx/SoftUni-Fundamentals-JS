function solve(num) {
  let n = Number(num);

  for (let a = 0; a < n; a++) {
    let fl = String.fromCharCode(97 + a);

    for (let b = 0; b < n; b++) {
      let ss = String.fromCharCode(97 + b);

      for (let c = 0; c < n; c++) {
        let tl = String.fromCharCode(97 + c);
        console.log(`${fl}${ss}${tl}`);
      }
    }
  }
}
solve('3');
