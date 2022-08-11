function mirrorWords(input) {
  let pattern = /([@#])[a-zA-Z]{3,}\1\1[a-zA-Z]{3,}\1/g;
  let secondPattern = /([@#])[a-zA-Z]{3,}\1/g;
  let matches = input[0].match(pattern);

  let wordsPairs = 0;
  let pairs = [];

  if (matches) {
    for (let line of matches) {
      let [matchA, matchB] = line.match(secondPattern);

      let reversedMatchB = matchB.split('').reverse().join('');
      if (matchA === reversedMatchB) {
        matchA = matchA.substring(1, matchA.length - 1);
        matchB = matchB.substring(1, matchB.length - 1);
        let result = `${matchA} <=> ${matchB}`;
        pairs.push(result);
      }
      wordsPairs++;
    }
  }

  if (wordsPairs > 0) {
    console.log(`${wordsPairs} word pairs found!`);
  } else {
    console.log('No word pairs found!');
  }

  if (pairs.length > 0) {
    console.log('The mirror words are:');
    console.log(pairs.join(', '));
  } else {
    console.log('No mirror words!');
  }
}

mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
]);
