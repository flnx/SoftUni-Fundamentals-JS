function muOnline(str) {
  let arr = str.split('|');
  const player = { health: 100, bitcoins: 0, room: 0 };

  for (let line of arr) {
    let [type, num] = line.split(' ');
    num = Number(num);
    player.room++;

    if (type == 'potion') {
      if (num + player.health >= 100) {
        num = 100 - player.health;
      }
      player.health += num;
      console.log(`You healed for ${num} hp.\nCurrent health: ${player.health} hp.`);
    } else if (type == 'chest') {
      player.bitcoins += num;
      console.log(`You found ${num} bitcoins.`);
    } else {
      player.health -= num;
      if (player.health <= 0) {
        console.log(`You died! Killed by ${type}.\nBest room: ${player.room}`);
        return;
      }
      console.log(`You slayed ${type}.`);
    }
  }
  console.log(`You've made it!\nBitcoins: ${player.bitcoins}\nHealth: ${player.health}`);
}
muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');

// You slayed rat.
// You slayed bat.
// You healed for 10 hp.
// Current health: 80 hp.
// You slayed rat.
// You found 100 bitcoins.
// You died! Killed by boss.
// Best room: 6

console.log(`------------------------------------------`);

muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');

// You slayed cat.
// You healed for 10 hp.
// Current health: 100 hp.
// You slayed orc.
// You found 10 bitcoins.
// You slayed snake.
// You found 110 bitcoins.
// You've made it!
// Bitcoins: 120
// Health: 65
