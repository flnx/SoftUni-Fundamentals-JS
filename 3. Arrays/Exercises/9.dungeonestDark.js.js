function dungeonestDark(input) {
  const character = { health: 100, coins: 0, bestRoom: 0 };
  const actions = { chest, potion, monsters };
  const commands = input.join('').split('|');

  for (let x of commands) {
    let [type, num] = x.split(' ');
    num = Number(num);
    character.bestRoom++;
    
    actions[type] ? actions[type](num) : actions.monsters(type, num);
    if (character.health < 1) return;
  }
  console.log(`You've made it!\nCoins: ${character.coins}\nHealth: ${character.health}`);

  function potion(hp) {
    if (hp + character.health > 100) {
      hp = 100 - character.health;
    }
    character.health += hp;
    console.log(`You healed for ${hp} hp.\nCurrent health: ${character.health} hp.`);
  }

  function chest(coinsFound) {
    character.coins += coinsFound;
    console.log(`You found ${coinsFound} coins.`);
  }

  function monsters(monster, damage) {
    character.health -= damage;
    if (character.health == 0) {
      console.log(`You died! Killed by ${monster}.\nBest room: ${character.bestRoom}`);
      return;
    }
    console.log(`You slayed ${monster}.`);
  }
}

dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);

// You slayed rat.
// You slayed bat.
// You healed for 10 hp.
// Current health: 80 hp.
// You slayed rat.
// You found 100 coins.
// You died! Killed by boss.
// Best room: 6

console.log(`----------------------------------------`);

dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);

// You slayed cat.
// You healed for 10 hp.
// Current health: 100 hp.
// You slayed orc.
// You found 10 coins.
// You slayed snake.
// You found 110 coins.
// You've made it!
// Coins: 120
// Health: 65

// ---------------
// old solution
// ---------------

function dungeonestDark(input) {
  let dungeon = input[0].split('|');
  let health = 100;
  let coins = 0;
  let roomCounter = 0;

  for (let i = 0; i < dungeon.length; i++) {
    roomCounter++;
    let currentRoom = dungeon[i].split(' ');

    let command = currentRoom[0];
    let stats = Number(currentRoom[1]);

    if (command === 'potion') {
      health += stats;

      if (health > 100) {
        let diff = Math.abs(health - 100 - stats);
        console.log(`You healed for ${diff} hp.`);
        health = 100;
      } else {
        console.log(`You healed for ${stats} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
    } else if (command === 'chest') {
      console.log(`You found ${stats} coins.`);
      coins += stats;
    } else {
      if (health > stats) {
        health -= stats;
        console.log(`You slayed ${command}.`);
      } else {
        health -= stats;
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${roomCounter}`);
        break;
      }
    }
  }

  if (health > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
