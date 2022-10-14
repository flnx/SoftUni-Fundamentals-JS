function treasureFinder(arr) {
  let keys = arr.shift().split(' ').join('');
  let decryptedMessages = new Set();

  for (let iterator of arr) {
    let decrypted = [];
    if (iterator === 'find') {
      break;
    }

    let keysIterator = 0;
    for (let i = 0; i < iterator.length; i++) {
      let currentKey = Number(keys[keysIterator]);
      let currentChar = iterator.charCodeAt(i);
      let decryptedChar = currentChar - currentKey;
      decrypted.push(decryptedChar);
      keysIterator++;
      if (keysIterator >= keys.length) {
        keysIterator = 0;
      }
    }

    decryptedMessages.add(decrypted);
  }

  for (let keys of decryptedMessages.keys()) {
    let output = String.fromCharCode(...keys);
    let treasure = output.substring(output.indexOf('&') + 1, output.lastIndexOf('&'));
    let coordinates = output.substring(output.indexOf('<') + 1, output.indexOf('>'));
    console.log(`Found ${treasure} at ${coordinates}`);
  }
}

treasureFinder([
  '1 2 1 3',
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  'find',
]);

treasureFinder([
  '1 4 2 5 3 2 1',
  `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
  "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
  "'stj)>34W68Z@",
  'find',
]);


// Found gold at 10N70W
// Found Silver at 32S43W
// Found gold at 0S123E
// Found gold at 102N43W
// Found ore at 23S43W