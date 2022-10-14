//using map
function wordsTracker(arr) {
  let wordsToCheck = arr.shift().split(' ');
  let words = new Map();

  for (let word of wordsToCheck) {
    words.set(word, 0);
  }

  for (let word of arr) {
    if (words.has(word)) {
      words.set(word, words.get(word) + 1);
    }
  }

  let sortedDescending = Array.from(words).sort((a, b) => b[1] - a[1]);

  for (const [key, value] of sortedDescending) {
    console.log(`${key} - ${value}`);
  }
}
wordsTracker([
  'this sentence',
  'In',
  'this',
  'sentence',
  'you',
  'have',
  'to',
  'count',
  'the',
  'occurrences',
  'of',
  'the',
  'words',
  'this',
  'and',
  'sentence',
  'because',
  'this',
  'is',
  'your',
  'task',
]);

// this - 3
// sentence - 2
// ------------------
// this - 3
// sentence - 2

console.log(`------------------`);
// using object

function wordsTrackerTwo(arr) {
  let wordsToCheck = arr.shift().split(' ');
  let words = {};
  for (let word of wordsToCheck) {
    words[word] = 0;
  }

  for (let word of arr) {
    if (words.hasOwnProperty(word)) {
      words[word]++;
    }
  }

  let sortedDescending = Object.entries(words).sort((a, b) => b[1] - a[1]);

  for (const [key, value] of sortedDescending) {
    console.log(`${key} - ${value}`);
  }
}

wordsTrackerTwo([
  'this sentence',
  'In',
  'this',
  'sentence',
  'you',
  'have',
  'to',
  'count',
  'the',
  'occurrences',
  'of',
  'the',
  'words',
  'this',
  'and',
  'sentence',
  'because',
  'this',
  'is',
  'your',
  'task',
]);


// this - 3
// sentence - 2
// ------------------
// this - 3
// sentence - 2