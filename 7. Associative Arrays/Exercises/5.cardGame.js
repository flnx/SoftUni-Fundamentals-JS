function cardGame(arr) {
  let cardPowers = {
    3: 3,
    2: 2,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let cardTypes = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  let people = new Map();

  for (let el of arr) {
    let [name, cards] = el.split(': ');
    let getCards = cards.split(', ');

    if (!people.has(name)) {
      people.set(name, new Set());
    }

    for (let card of getCards) {
      people.get(name).add(card);
    }
  }

  for (let [name, value] of people.entries()) {
    console.log(`${name}: ${cardsInformation(value)}`);
  }

  function cardsInformation(value) {
    let sumPoints = 0;
    for (let card of value) {
      let tokens = card.split('');
      let type = tokens.pop();
      let power = tokens.join('');
      let getPowerInfo = cardPowers[power];
      let getTypeInfo = cardTypes[type];
      let cardPoints = getPowerInfo * getTypeInfo;
      sumPoints += cardPoints;
    }

    return sumPoints;
  }
}
cardGame([
  'Peter: 2C, 4H, 9H, AS, QS',
  'Tomas: 3H, 10S, JC, KD, 5S, 10S',
  'Andrea: QH, QC, QS, QD',
  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
  'Andrea: QH, QC, JS, JD, JC',
  'Peter: JD, JD, JD, JD, JD, JD',
]);

// Peter: 167
// Tomas: 175
// Andrea: 197