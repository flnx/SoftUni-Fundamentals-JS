function solve(arr) {
  let newArray = [];
  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'add') {
      newArray.push(counter);
    } else if (arr[i] === 'remove') {
      newArray.pop();
    }
    counter++;
  }

  if (newArray.length < 1) {
    console.log('Empty');
  } else {
    console.log(newArray.join(' '));
  }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);
