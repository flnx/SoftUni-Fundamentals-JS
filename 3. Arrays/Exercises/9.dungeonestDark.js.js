function solve(input) {
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

  // https://pastebin.com/sUVjZnu6 improve code
}
solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
// solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
