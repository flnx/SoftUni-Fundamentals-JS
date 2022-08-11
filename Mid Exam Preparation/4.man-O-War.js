function solve(data) {
  let pirateShip = data.shift().split('>').map(Number);
  let warShip = data.shift().split('>').map(Number);
  let maxHealthCapacity = Number(data.shift());

  let index = 0;
  let command = data[index];
  let isGameOver = false;

  while (command !== 'Retire') {
    command = command.split(' ');
    let action = command.shift();

    switch (action) {
      case 'Fire':
        let warShipPosition = Number(command[0]);
        let damage = Number(command[1]);
        if (warShipPosition < 0 || warShipPosition > warShip.length - 1) {
          index++;
          command = data[index];
          continue;
        }
        warShip[warShipPosition] -= damage;

        if (warShip[warShipPosition] <= 0) {
          isGameOver = true;
          console.log('You won! The enemy ship has sunken.');
          break;
        }
        break;
      case 'Defend':
        let startIndex = Number(command[0]);
        let lastIndex = Number(command[1]);
        let damageTaken = Number(command[2]);

        if (
          startIndex < 0 ||
          startIndex > pirateShip.length - 1 ||
          lastIndex < 0 ||
          lastIndex > pirateShip.length - 1
        ) {
          index++;
          command = data[index];
          continue;
        }

        for (let i = startIndex; i <= lastIndex; i++) {
          pirateShip[i] -= damageTaken;
          if (pirateShip[i] <= 0) {
            isGameOver = true;
            console.log('You lost! The pirate ship has sunken.');
            break;
          }
        }

        break;
      case 'Repair':
        let repairPosition = Number(command[0]);
        let heal = Number(command[1]);
        if (repairPosition < 0 || repairPosition > pirateShip.length - 1) {
          index++;
          command = data[index];
          continue;
        }

        if (pirateShip[repairPosition] + heal > maxHealthCapacity) {
          pirateShip[repairPosition] = maxHealthCapacity;
        } else {
          pirateShip[repairPosition] += heal;
        }
        break;

      case 'Status':
        let warningStatus = maxHealthCapacity * 0.2;
        let filterOut = pirateShip.filter((el) => el < warningStatus);
        console.log(`${filterOut.length} sections need repair.`);
        break;
    }

    if (isGameOver) {
      break;
    }

    index++;
    command = data[index];
  }
  let pirateShipHealth = pirateShip.reduce((a, b) => (a += b), 0);
  let warShipHealth = warShip.reduce((a, b) => (a += b), 0);

  if (isGameOver === false) {
    console.log(`Pirate ship status: ${pirateShipHealth}`);
    console.log(`Warship status: ${warShipHealth}`);
  }
}

solve([
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
