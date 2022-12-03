function heroesOfCodeAndLogicVII(arr) {
  const MAX_HEALTH = 100;
  const MAX_MANA = 200;

  const commands = {
    CastSpell: castSpell,
    TakeDamage: takeDamage,
    Recharge: recharge,
    Heal: heal,
  };

  const heroes = {};

  let n = +arr[0] + 1;

  arr.slice(1, n).forEach((line) => {
    let [hero, hp, mp] = line.split(' ');
    hp = Number(hp);
    mp = Number(mp);
    heroes[hero] = { hp, mp };
  });

  while (arr[n] !== 'End') {
    let [action, hero, t1, t2] = arr[n].split(' - ');
    t1 = Number(t1);

    let fn = commands[action];
    fn(hero, t1, t2);

    n++;
  }

  Object.entries(heroes).forEach(([hero, heroInfo]) => {
    console.log(`${hero}`);
    console.log(` HP: ${heroInfo.hp}\n MP: ${heroInfo.mp}`);

  });

  function castSpell(hero, mp, spell) {
    const heroName = heroes[hero];

    if (heroName.mp >= mp) {
      heroName.mp -= mp;
      return console.log(
        `${hero} has successfully cast ${spell} and now has ${heroName.mp} MP!`
      );
    }

    console.log(`${hero} does not have enough MP to cast ${spell}!`);
  }


  function takeDamage(hero, dmg, attacker) {
    const heroName = heroes[hero];
    heroName.hp -= dmg;

    if (heroName.hp <= 0) {
      delete heroes[hero];
      return console.log(`${hero} has been killed by ${attacker}!`);
    }

    return console.log(
      `${hero} was hit for ${dmg} HP by ${attacker} and now has ${heroName.hp} HP left!`
    );
  }


  function recharge(hero, amount) {
    const heroName = heroes[hero];
    const refill = Math.min(MAX_MANA - heroName.mp, amount);
    heroName.mp += refill;

    console.log(`${hero} recharged for ${refill} MP!`);
  }


  function heal(hero, amount) {
    const heroName = heroes[hero];
    const refill = Math.min(MAX_HEALTH - heroName.hp, amount);

    heroName.hp += refill;
    console.log(`${hero} healed for ${refill} HP!`);
  }
}

heroesOfCodeAndLogicVII([
  '2',
  'Solmyr 85 120',
  'Kyrre 99 50',
  'Heal - Solmyr - 10',
  'Recharge - Solmyr - 50',
  'TakeDamage - Kyrre - 66 - Orc',
  'CastSpell - Kyrre - 15 - ViewEarth',
  'End',
]);

// Solmyr healed for 10 HP!
// Solmyr recharged for 50 MP!
// Kyrre was hit for 66 HP by Orc and now has 33 HP left!
// Kyrre has successfully cast ViewEarth and now has 35 MP!
// Solmyr
//   HP: 95
//   MP: 170
// Kyrre
//   HP: 33
//   MP: 35

console.log();

heroesOfCodeAndLogicVII([
  '4',
  'Adela 90 150',
  'SirMullich 70 40',
  'Ivor 1 111',
  'Tyris 94 61',
  'Heal - SirMullich - 50',
  'Recharge - Adela - 100',
  'CastSpell - Tyris - 1000 - Fireball',
  'TakeDamage - Tyris - 99 - Fireball',
  'TakeDamage - Ivor - 3 - Mosquito',
  'End',
]);

// SirMullich healed for 30 HP!
// Adela recharged for 50 MP!
// Tyris does not have enough MP to cast Fireball!
// Tyris has been killed by Fireball!
// Ivor has been killed by Mosquito!
// Adela
//   HP: 90
//   MP: 200
// SirMullich
//   HP: 100
//   MP: 40
