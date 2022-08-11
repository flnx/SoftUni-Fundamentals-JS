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
