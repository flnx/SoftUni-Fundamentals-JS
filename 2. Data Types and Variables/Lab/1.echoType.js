function solve(para) {
  let type = typeof para;

  console.log(type);
  if (type == 'string' || type == 'number') {
    console.log(para);
  } else {
    console.log('Parameter is not suitable for printing');
  }
}
solve('Hello, JavaScript!');
solve(15);
solve(undefined);
solve(null);
