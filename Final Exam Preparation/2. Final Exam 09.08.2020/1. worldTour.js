function worldTour(arr) {
  let myStops = arr[0];

  const commands = {
    'Add Stop': add,
    'Remove Stop': remove,
    Switch: change,
  };

  let i = 1;

  while (arr[i] != 'Travel') {
    const [command, t1, t2] = arr[i].split(':');
    const fn = commands[command];

    fn(t1, t2);
    console.log(myStops);
    i++;
  }

  console.log(`Ready for world tour! Planned stops: ${myStops}`);

  function add(i, string) {
    i = Number(i);

    if (myStops[i]) {
      const firstPart = myStops.substring(0, i);
      const secondPart = myStops.substring(i);
      myStops = firstPart + string + secondPart;
    }
  }

  function remove(i1, i2) {
    i1 = Number(i1);
    i2 = Number(i2);

    if (myStops[i1] && myStops[i2]) {
      const toRemove = myStops.substring(i1, i2 + 1);
      myStops = myStops.replace(toRemove, '');
    }
  }

  function change(oldStr, newStr) {
    const pattern = new RegExp(oldStr, 'g');
    myStops = myStops.replace(pattern, newStr);
  }
}

worldTour([
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel',
]);

// Hawai::RomeCyprys-Greece
// Hawai::Rome-Greece
// Bulgaria::Rome-Greece
// Ready for world tour! Planned stops:
// Bulgaria::Rome-Greece

console.log();

worldTour([
  'Albania:Bulgaria:Cyprus:Deuchland',
  'Add Stop:3:Nigeria',
  'Remove Stop:4:8',
  'Switch:Albania: Azərbaycan',
  'Travel',
]);

// AlbNigeriaania:Bulgaria:Cyprus:Deuchland
// AlbNaania:Bulgaria:Cyprus:Deuchland
// AlbNaania:Bulgaria:Cyprus:Deuchland
// Ready for world tour! Planned stops: AlbNaania:
// Bulgaria:Cyprus:Deuchland
