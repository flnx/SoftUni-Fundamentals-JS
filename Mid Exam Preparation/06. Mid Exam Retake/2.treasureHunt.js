function treasureHunt(arr) {
  let state = arr.shift().split('|');
  const commands = {
    Loot: loot,
    Drop: drop,
    Steal: steal,
    'Yohoho!': yohoho,
  };

  for (let line of arr) {
    let [action, ...type] = line.split(' ');

    const fn = commands[action];
    const isYohoho = fn(type);

    if(isYohoho) {
      console.log(isYohoho);
      return;
    }
  }

  function loot(items) {
    items.forEach((item) => {
      if (!state.includes(item)) {
        state.unshift(item);
      }
    });
  }

  function drop(index) {
    index = Number(index);
    if (index >= 0 && index < state.length) {
      let elem = state.splice(index, 1);
      state.push(...elem);
    }
  }

  function steal(count) {
    count = Number(count)
    let stolenItems = state.splice(-count).join(', ');
    console.log(stolenItems);
  }

  function yohoho() {
    if (state.length == 0) {
     return 'Failed treasure hunt.'
    }
    let avgGain = state.reduce((acc, x) => acc + x.length, 0) / state.length;
    return `Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`;
  }
}

treasureHunt([
  'Gold|Silver|Bronze|Medallion|Cup',
  'Loot Wood Gold Coins',
  'Loot Silver Pistol',
  'Drop 3',
  'Steal 3',
  'Yohoho!',
]);

console.log(`-------------------`);

treasureHunt([
  'Diamonds|Silver|Shotgun|Gold',
  'Loot Silver Medals Coal',
  'Drop -1',
  'Drop 1',
  'Steal 6',
  'Yohoho!',
]);
