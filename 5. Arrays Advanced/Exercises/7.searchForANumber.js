function solve(arr, actions) {
  let newArr = arr.slice(0, actions[0]);

  newArr.splice(0, actions[1]);
  let counter = 0;
  for (let el of newArr) {
    if (el === actions[2]) {
      counter++;
    }
  }

  console.log(`Number ${actions[2]} occurs ${counter} times.`);
}
solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
