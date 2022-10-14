function arenaTier(arr) {
  let gladiators = {};
  for (let command of arr) {
    if (command === 'Ave Cesar') {
      break;
    }
    let [name, technique, skill] = command.split(' -> ');
    skill = Number(skill);

    if (technique !== undefined) {
      addGladiator(name, technique, skill);
    } else {
      let [gladiatorOne, gladiatorTwo] = name.split(' vs ');
      if (
        !gladiators.hasOwnProperty(gladiatorOne) ||
        !gladiators.hasOwnProperty(gladiatorTwo)
      ) {
        continue;
      }

      fight(gladiatorOne, gladiatorTwo, technique);
    }
  }

  let gladiatorTotalSkills = {};

  for (let [gladiatorName, values] of Object.entries(gladiators)) {
    let sum = 0;
    for (let skill of Object.values(values)) {
      sum += skill;
    }
    gladiatorTotalSkills[gladiatorName] = sum;
  }

  let sorted = Object.entries(gladiatorTotalSkills).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );

  for (let [gladiatorName, skills] of sorted) {
    console.log(`${gladiatorName}: ${skills} skill`);

    Object.entries(gladiators[gladiatorName])
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .forEach(([technique, skill]) => console.log(`- ${technique} <!> ${skill}`));
  }

  function addGladiator(name, technique, skill) {
    if (!gladiators.hasOwnProperty(name)) {
      gladiators[name] = {};
    }
    let oldSkill = gladiators[name][technique];
    if (oldSkill > skill) {
      skill = oldSkill;
    }
    return (gladiators[name][technique] = skill);
  }

  function fight(gladiatorOne, gladiatorTwo, technique) {
    let sumGladiatorOne = 0;
    let sumGladiatorTwo = 0;
    for (let [technique] of Object.entries(gladiators[gladiatorOne])) {
      if (gladiators[gladiatorTwo].hasOwnProperty(technique)) {
        sumGladiatorOne += gladiators[gladiatorOne][technique];
        sumGladiatorTwo += gladiators[gladiatorTwo][technique];
      }
    }
    if (sumGladiatorOne > sumGladiatorTwo) {
      return delete gladiators[gladiatorTwo];
    } else if (sumGladiatorOne < sumGladiatorTwo) {
      return delete gladiators[gladiatorOne];
    }
  }
}

arenaTier([
  'Peter -> BattleCry -> 400',
  'Alex -> PowerPunch -> 300',
  'Stefan -> Duck -> 200',
  'Stefan -> Tiger -> 250',
  'Ave Cesar',
]);

console.log(`--------------------`);

arenaTier([
  'Peter -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Peter vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Maximilian',
  'Ave Cesar',
]);

// Stefan: 450 skill
// - Tiger <!> 250
// - Duck <!> 200
// Peter: 400 skill
// - BattleCry <!> 400
// Alex: 300 skill
// - PowerPunch <!> 300
// --------------------
// Gladius: 700 skill
// - Shield <!> 250
// - Support <!> 250
// - Heal <!> 200
