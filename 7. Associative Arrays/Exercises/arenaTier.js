function arenaTier(arr) {
  let glads = {};

  for (command of arr) {
    if (command === 'Ave Cesar') {
      break;
    }
    let [name, technique, skill] = command.split(' -> ');
    skill = Number(skill);

    if (technique !== undefined) {
      if (!glads.hasOwnProperty(name)) {
        glads[name] = {};
      }

      let oldSkill = glads[name][technique];
      if (oldSkill > skill) {
        skill = oldSkill;
      }
      glads[name][technique] = skill;
    } else {
      let [gladOne, gladTwo] = name.split(' vs ');

      if (!glads.hasOwnProperty(gladOne) || !glads.hasOwnProperty(gladTwo)) {
        continue;
      }

      let sumgladOne = 0;
      let sumgladTwo = 0;
      for (let [technique, skill] of Object.entries(glads[gladOne])) {
        if (glads[gladTwo].hasOwnProperty(technique)) {
          sumgladOne += glads[gladOne][technique];
          sumgladTwo += glads[gladTwo][technique];
        }
      }
      if (sumgladOne > sumgladTwo) {
        delete glads[gladTwo];
      } else if (sumgladOne < sumgladTwo) {
        delete glads[gladOne];
      }
    }
  }

  let gladsTotalSkill = {};

  for (let [gladName, values] of Object.entries(glads)) {
    let sum = 0;
    for (let skill of Object.values(values)) {
      sum += skill;
    }
    gladsTotalSkill[gladName] = sum;
  }

  let sorted = Object.entries(gladsTotalSkill).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );

  for (let [gladName, skills] of sorted) {
    console.log(`${gladName}: ${skills} skill`);
    let techniqueSkillSort = Object.entries(glads[gladName])
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .forEach(([technique, skill]) => console.log(`- ${technique} <!> ${skill}`));
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
