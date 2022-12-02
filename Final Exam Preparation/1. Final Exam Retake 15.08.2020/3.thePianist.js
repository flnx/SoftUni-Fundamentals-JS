function thePianist(arr) {
  let n = +arr[0] + 1;

  const commands = {
    Add: add,
    Remove: remove,
    ChangeKey: changeKey,
  };

  const collection = {};

  arr.slice(1, n).forEach((line) => {
    const [piece, composer, key] = line.split('|');
    collection[piece] = { composer, key };
  });

  while (arr[n] != 'Stop') {
    const [action, piece, key1, key2] = arr[n].split('|');

    const fn = commands[action];
    console.log(fn(piece, key1, key2));
    n++;
  }

  Object.entries(collection).forEach(([piece, obj]) => {
    console.log(`${piece} -> Composer: ${obj.composer}, Key: ${obj.key}`);
  });

  function add(piece, composer, key) {
    if (!collection.hasOwnProperty(piece)) {
      collection[piece] = { composer, key };
      return `${piece} by ${composer} in ${key} added to the collection!`;
    }

    return `${piece} is already in the collection!`;
  }

  function remove(piece) {
    if (collection.hasOwnProperty(piece)) {
      delete collection[piece];
      return `Successfully removed ${piece}!`;
    }

    return `Invalid operation! ${piece} does not exist in the collection.`;
  }

  function changeKey(piece, newKey) {
    if (collection.hasOwnProperty(piece)) {
      collection[piece].key = newKey;
      return `Changed the key of ${piece} to ${newKey}!`;
    }

    return `Invalid operation! ${piece} does not exist in the collection.`;
  }
}

thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop',
]);

// Sonata No.2 by Chopin in B Minor added to the collection!
// Hungarian Rhapsody No.2 by Liszt in C# Minor added to the collection!
// Fur Elise is already in the collection!
// Successfully removed Clair de Lune!
// Changed the key of Moonlight Sonata to C# Major!
// Fur Elise -> Composer: Beethoven, Key: A Minor
// Moonlight Sonata -> Composer: Beethoven, Key: C# Major
// Sonata No.2 -> Composer: Chopin, Key: B Minor
// Hungarian Rhapsody No.2 -> Composer: Liszt, Key: C# Minor
console.log();

thePianist([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop',
]);

// Spring by Vivaldi in E Major added to the collection!
// Successfully removed The Marriage of Figaro!
// Invalid operation! Turkish March does not exist in the collection.
// Changed the key of Spring to C Major!
// Nocturne by Chopin in C# Minor added to the collection!
// Eine kleine Nachtmusik -> Composer: Mozart, Key: G Major
// La Campanella -> Composer: Liszt, Key: G# Minor
// Hungarian Dance No.5 -> Composer: Brahms, Key: G Minor
// Spring -> Composer: Vivaldi, Key: C Major
// Nocturne -> Composer: Chopin, Key: C# Minor
