function solve(charOne, charTwo) {
  let start = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0));
  let end = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0));

  let res = [];

  for (let i = start + 1; i < end; i++) {
    let toChar = String.fromCharCode(i);
    res.push(toChar);
  }

  console.log(res.join(' '));
}
solve('a', 'd');
solve('#', ':');
solve('C', '#');
