function armies(input) {
  let allArmies = {};
  let sortedByGeneral = {};

  for (let iterator of input) {
    if (iterator.includes('arrives')) {
      addLeader(iterator);
    } else if (iterator.includes(':')) {
      addArmy(iterator);
    } else if (iterator.includes('+')) {
      updateArmy(iterator);
    } else {
      deleteLeader(iterator);
    }
  }

  for (let [generalName, army] of Object.entries(allArmies)) {
    sortGenerals(generalName, army);
  }
  let sortedByStrongestGeneral = Object.entries(sortedByGeneral).sort(
    (a, b) => b[1] - a[1]
  );

  for (let [generalName, totalArmy] of sortedByStrongestGeneral) {
    sortArmies(generalName, totalArmy);
  }

  function addArmy(army) {
    let [leaderName, currentArmy] = army.split(': ');
    let armyAndSize = currentArmy.split(', '); // [0] army name, [1] - army size
    if (allArmies.hasOwnProperty(leaderName)) {
      return (allArmies[leaderName][armyAndSize[0]] = Number(armyAndSize[1]));
    }
  }

  function updateArmy(addUnits) {
    let [armyName, armySize] = addUnits.split(' + ');
    for (let [generalName, currentArmy] of Object.entries(allArmies)) {
      if (currentArmy.hasOwnProperty(armyName)) {
        currentArmy[armyName] += Number(armySize);
      }
    }
  }

  function deleteLeader(defeatedLeader) {
    let tokens = defeatedLeader.split(' ');
    tokens.pop();
    let generalName = tokens.join(' ');
    return delete allArmies[generalName];
  }

  function sortGenerals(generalName, army) {
    let totalArmy = 0;
    for (let [armyName, armySize] of Object.entries(army)) {
      totalArmy += armySize;
    }
    return (sortedByGeneral[generalName] = totalArmy);
  }

  function sortArmies(generalName, totalArmy) {
    console.log(`${generalName}: ${totalArmy}`);
    Object.entries(allArmies[generalName])
      .sort((a, b) => b[1] - a[1])
      .forEach(([name, size]) => console.log(`>>> ${name} - ${size}`));
  }

  function addLeader(name) {
    let [leaderName] = name.split(' arrives');
    if (!allArmies.hasOwnProperty(leaderName)) {
      return (allArmies[leaderName] = {});
    }
  }
}

armies([
  'Rick Burr arrives',
  'Findlay arrives',
  'Porter arrives',

  'Rick Burr: Juard, 50000',
  'Findlay: Britox, 34540',
  'Porter: Legion, 55000',
  'Porter: Retix, 3205',
  'Fergus: Wexamp, 30245',

  'Wexamp + 6000',
  'Juard + 1350',
  'Britox + 4500',
  'Legion + 302',

  'Rick Burr defeated',
]);

// armies(['Rick Burr arrives',
//       'Findlay arrives',
//     'Wexamp arrives',

//     'Rick Burr: Juard, 1500',
//     'Findlay: Wexamp, 34540',
//     'Wexamp: Britox, 1155',
//     'Wexamp: Juard, 43423',

//     'Wexamp + 340'
// ])
