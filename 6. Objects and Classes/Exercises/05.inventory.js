function inventory(arr) {
  let heroes = [];

  for (let hero of arr) {
    let [name, level, items] = hero.split(' / ');
    let currentHero = {
      name,
      level: +level,
      items,
    };
    heroes.push(currentHero);
  }
  let sortedByLevel = heroes.sort((a, b) => a.level - b.level);

  for (const hero of sortedByLevel) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}
inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);

// Hero: Hes
// level => 1
// items => Desolator, Sentinel, Antara
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun
