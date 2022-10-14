function wordOccurrences(arr) {
  let myMap = new Map();

  for (let word of arr) {
    if (!myMap.has(word)) {
      myMap.set(word, 0);
    }

    myMap.set(word, myMap.get(word) + 1);
  }
  let sortedByCount = Array.from(myMap).sort((a, b) => b[1] - a[1]);

  for (let [word, counter] of sortedByCount) {
    console.log(`${word} -> ${counter} times`);
  }
}

wordOccurrences([
  'Here',
  'is',
  'the',
  'first',
  'sentence',
  'Here',
  'is',
  'another',
  'sentence',
  'And',
  'finally',
  'the',
  'third',
  'sentence',
]);

// sentence -> 3 times
// Here -> 2 times
// is -> 2 times
// the -> 2 times
// first -> 1 times
// another -> 1 times
// And -> 1 times
// finally -> 1 times
// third -> 1 times
