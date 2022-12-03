function emojiDetector(arr) {
  const regex = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
                
  const digitsRegex = /\d/g;

  let threshold = arr[0]
    .match(digitsRegex)
    .map(Number)
    .reduce((acc, curr) => acc * curr);

  let m;
  let emojis = [];
  let found = 0;

  while ((m = regex.exec(arr)) !== null) {
    found++;
    let emojiCoolness = 0;
    let emoji = m[2];

    emoji.split('').forEach((e) => (emojiCoolness += e.charCodeAt()));

    emojiCoolness < threshold ? '' : emojis.push(m[0]);
  }

  console.log(`Cool threshold: ${threshold}`);
  console.log(`${found} emojis found in the text. The cool ones are:`);
  console.log(emojis.join('\n'));
}

emojiDetector([
  'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**',
]);

// Cool threshold: 540
// 4 emojis found in the text.
// The cool ones are:
// ::Smiley::
// **Tigers**
// ::Mooning::

console.log();

emojiDetector([
  '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::',
]);

// Cool threshold: 120
// 4 emojis found in the text.
// The cool ones are:
// ::Joy::
// **Banana**
// ::Wink::
// **Vali**

console.log();

emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);

// Cool threshold: 17496
// 1 emojis found in the text.
// The cool ones are:
