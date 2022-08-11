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
