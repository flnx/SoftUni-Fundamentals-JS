function thePianist(input) {
  let favorites = {};
  // object for functions
  let actions = {
    "Add": addPiece,
    "Remove": removePiece,
    "ChangeKey": changeKey,
  };

  // put the pieces and their properties into favorites (obj)
  let currentFavs = Number(input.shift());
  for (let i = 0; i < currentFavs; i++) {
    let [piece, composer, key] = input.shift().split('|');
    favorites[piece] = { composer, key };
  }

  // split the current input, get the info, call the needed functions and do the given action
  while (input[0] !== 'Stop') {
    let [command, piece, composer, key] = input.shift().split('|');
    let action = actions[command];
    action(piece, composer, key);
  }

  // print out the end result
  for (let [piece, values] of Object.entries(favorites)) {
    console.log(`${piece} -> Composer: ${values.composer}, Key: ${values.key}`);
  }

  // add in favorites if exists
  function addPiece(piece, composer, key) {
    if (!favorites.hasOwnProperty(piece)) {
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);
      return (favorites[piece] = { composer, key });
    } else {
      console.log(`${piece} is already in the collection!`);
    }
  }

  // remove from favorites if it exists
  function removePiece(piece) {
    if (favorites.hasOwnProperty(piece)) {
      console.log(`Successfully removed ${piece}!`);
      return delete favorites[piece];
    } else {
      console.log(`Invalid operation! ${piece} does not exist in the collection.`);
    }
  }

  // change the current key with the new one if the piece exists
  function changeKey(piece, newKey) {
    if (favorites.hasOwnProperty(piece)) {
      console.log(`Changed the key of ${piece} to ${newKey}!`);
      return favorites[piece]['key'] = newKey;
    } else {
      console.log(`Invalid operation! ${piece} does not exist in the collection.`);
    }
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
