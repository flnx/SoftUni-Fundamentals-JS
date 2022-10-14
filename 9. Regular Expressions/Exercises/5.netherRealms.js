function netherRealms(input) {
  let namePattern = /[^,\s]+/g;
  let healthPattern = /[^\d+\-*,/.]/g;
  let damagePattern = /[-+]?[\d]+(?:\.\d+)?/g;
  let baseAlterPattern = /[*/]/g;
  let demonName = input.match(namePattern);
  let demons = {};
  demonName.sort((a, b) => a.localeCompare(b));

  for (let name of demonName) {
    let demonDamage = name.match(damagePattern);
    let alterdmg = name.match(baseAlterPattern);
    let demonHealth = name
      .match(healthPattern)
      .map((letterCode) => letterCode.charCodeAt(0))
      .reduce((a, b) => a + b);

    let demonTotalDmg = 0;

    if (demonDamage !== null) {
      for (let dmg of demonDamage) {
        dmg = Number(dmg);
        demonTotalDmg += dmg;
      }
    }

    if (alterdmg !== null) {
      for (let symbol of alterdmg) {
        if (symbol === '*') demonTotalDmg *= 2;
        else if (symbol === '/') demonTotalDmg /= 2;
      }
    }
    demons[name] = {};
    console.log(`${name} - ${demonHealth} health, ${demonTotalDmg.toFixed(2)} damage`);
  } // !END OF LOOP
}
netherRealms('M3ph-0.5s-0.5t0.0**'); // M3ph-0.5s-0.5t0.0** - 524 health, 8.00 damage
