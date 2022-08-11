function starEnigma(input) {
  let starPattern = /[star]/gim;
  let pattern = /@([A-Za-z]+)[^@\-!:>]*:(\d+)[^@\-!:>]*!([AD])![^@\-!:>]*->(\d+)/;
  let numberOfMessages = input.shift();
  let attackedPlanets = [];
  let destroyedPlanets = [];

  for (let el of input) {
    let currentMessage = [];

    // check for 's' 't' 'a' 'r' letters
    let starCounter = el.match(starPattern);
    let starCodeLength = starCounter === null ? 0 : starCounter.length;

    // decrypting the message

    let decryptor = el.split('').forEach((a) => {
      let char = a.charCodeAt(0);
      let decryptLetter = char - starCodeLength;
      currentMessage.push(decryptLetter);
    });

    currentMessage = String.fromCharCode(...currentMessage);
    let msgValidator = pattern.exec(currentMessage);

    // validating the message

    if (msgValidator !== null) {
      let [_, planet, population, attack, soldiers] = msgValidator;

      if (attack === 'A') {
        attackedPlanets.push(planet);
      } else if (attack === 'D') {
        destroyedPlanets.push(planet);
      }
    }
  }

  const result = (element) => {
    element
      .sort((a, b) => a.localeCompare(b))
      .forEach((planet) => console.log(`-> ${planet}`));
  };

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  result(attackedPlanets);

  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  result(destroyedPlanets);
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);

console.log(`<-------------------->`);
starEnigma([
  '3',
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  'GQhrr|A977777(H(TTTT',
  'EHfsytsnhf?8555&I&2C9555SR',
]);
