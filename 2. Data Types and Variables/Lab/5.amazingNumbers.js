function solve(num) {
  num = num.toString();
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  let result = sum.toString().includes('9');
  console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
solve(1233);

function solve(num) {
  let toString = num.toString();
  let result = 0;
  let isAmazing = false;

  for (let i = 0; i < toString.length; i++) {
    result += Number(toString[i]);
  }

  result = result.toString();

  for (let i = 0; i < result.length; i++) {
    if (result[i] === '9') {
      isAmazing = true;
      break;
    }
  }
  console.log(`${num} ${isAmazing ? 'Amazing? True' : 'Amazing? False'}`);
}
solve(1233);
