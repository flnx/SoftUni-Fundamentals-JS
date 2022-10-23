function manOwar(arr) {
  const pirateShip = arr.shift().split('>').map(Number);
  const warShip = arr.shift().split('>').map(Number);
  const healthCapacity = Number(arr.shift());

  const commands = {
    Fire: fire,
    Defend: defend,
    Repair: repair,
    Status: status,
    Retire: retire,
  };

  for (let line of arr) {
    let [action, i, i2, wDmg] = line.split(' ');
    i = Number(i);
    i2 = Number(i2);

    const commandFn = commands[action];
    const hasShipSunken = commandFn(i, i2, wDmg);

    if (hasShipSunken) {
      console.log(hasShipSunken);
      return;
    }
  }

  function fire(i, dmg) {
    if (i < 0 || i > warShip.length - 1) {
      return;
    }
    warShip[i] -= dmg;
    if (warShip[i] <= 0) {
      return 'You won! The enemy ship has sunken.';
    }
  }

  function defend(i1, i2, dmg) {
    const invalidIndexes = [i1, i2].some((i) => i < 0 || i > pirateShip.length - 1);
    dmg = Number(dmg);

    if (invalidIndexes) {
      return;
    }

    for (let i = i1; i <= i2; i++) {
      pirateShip[i] -= dmg;
      if (pirateShip[i] <= 0) {
        return 'You lost! The pirate ship has sunken.';
      }
    }
  }

  function repair(i, addHealth) {
    if (i < 0 || i > pirateShip.length - 1) {
      return;
    }
    const health = Math.min(pirateShip[i] + addHealth, healthCapacity);
    pirateShip[i] = health;
  }

  function status() {
    const healthLowCap = healthCapacity * 0.2;
    const filtered = pirateShip.filter((x) => x < healthLowCap);
    console.log(`${filtered.length} sections need repair.`);
  }

  function retire() {
    let pirateShipStatus = pirateShip.reduce((acc, x) => acc + x, 0);
    let warShipStatus = warShip.reduce((acc, x) => acc + x, 0);
    return [
      `Pirate ship status: ${pirateShipStatus}`,
      `Warship status: ${warShipStatus}`,
    ].join('\n');
  }
}
manOwar([
  '12>13>11>20>66',
  '12>22>33>44>55>32>18',
  '70',
  'Fire 2 11',
  'Fire 8 100',
  'Defend 3 6 11',
  'Defend 0 3 5',
  'Repair 1 33',
  'Status',
  'Retire',
]);

// 2 sections need repair.
// Pirate ship status: 135
// Warship status: 205

console.log(`----------------`);

manOwar([
  '2>3>4>5>2',
  '6>7>8>9>10>11',
  '20',
  'Status',
  'Fire 2 3',
  'Defend 0 4 11',
  'Repair 3 18',
  'Retire',
]);

// 3 sections need repair.
// You lost! The pirate ship has sunken.
