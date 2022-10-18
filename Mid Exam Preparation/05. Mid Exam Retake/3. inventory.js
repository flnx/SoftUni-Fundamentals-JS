function inventory(arr) {
  let journal = arr.shift().split(', ');
  const commands = { Collect: collect, Drop: drop, 'Combine Items': combine, Renew: renew };

  for (const line of arr) {
    if (line == 'Craft!') {
      break;
    }
    let [action, item] = line.split(' - ');
    const command = commands[action];
    command(item);
  }

  console.log(journal.join(', '));

  function collect(item) {
    if (!journal.includes(item)) {
      journal.push(item);
    }
  }
  function drop(item) {
    const index = journal.indexOf(item);
    if (index != -1) {
      journal.splice(index, 1);
    }
  }
  function combine(items) {
    const [oldItem, newItem] = items.split(':');
    const index = journal.indexOf(oldItem);
    if (index != -1) {
      journal.splice(index + 1, 0, newItem);
    }
  }
  function renew(item) {
    const index = journal.indexOf(item);
    const elem = index != -1 ? journal.splice(index, 1) : '';
    journal.push(...elem);
  }
}
inventory([
'Iron, Wood, Sword', 
'Collect - Gold', 
'Drop - Wood', 'Craft!']);

// Iron, Sword, Gold

console.log(`-------------------------`);

inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!',
]);

// Sword, Bow, Iron
