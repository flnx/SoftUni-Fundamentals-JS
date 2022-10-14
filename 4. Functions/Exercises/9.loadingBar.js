function solve(n) {
  let loadingSymbol = '%'.repeat(n / 10);
  let spaceLeftSymbol = '.'.repeat(10 - loadingSymbol.length);

  if (spaceLeftSymbol.length === 0) {
    console.log(`100% Complete!`);
  } else {
    console.log(`${n}% [${loadingSymbol}${spaceLeftSymbol}]`);
    console.log('Still loading...');
  }
}

solve(100); // 100% Complete!
solve(85) // 85% Complete! Still loading...

