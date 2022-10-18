function solve(arr) {
  let inventory = arr.shift().split(' ');
  let commands = { Buy: buy, Trash: trash, Repair: repair, Upgrade: upgrade };

  for (let i = 0; i < arr.length; i++) {
    let [command, item] = arr[i].split(' ');
    let fn = commands[command]
    fn(item);
  }

  console.log(inventory.join(' '));

  function buy(equipment) {
    if (!inventory.includes(equipment)) {
      inventory.push(equipment);
    }
  }

  function trash(equipment) {
    if (inventory.includes(equipment)) {
      let index = inventory.indexOf(equipment);
      inventory.splice(index, 1);
    }
  }

  function repair(equipment) {
    if (inventory.includes(equipment)) {
      let index = inventory.indexOf(equipment);
      let getItem = inventory.splice(index, 1);
      inventory.push(getItem[0]);
    }
  }

  function upgrade(equipment) {
    let [oldItem, newItem] = equipment.split('-');

    if (inventory.includes(oldItem)) {
      let index = inventory.indexOf(oldItem);
      let upgraded = `${oldItem}:${newItem}`;
      inventory.splice(index + 1, 0, upgraded);
    }
  }
}

solve([
  'SWORD Shield Spear',
  'Buy Bag',
  'Trash Shield',
  'Repair Spear',
  'Upgrade SWORD-Steel',
]); // SWORD SWORD:Steel Bag Spear

solve(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']); // SWORD Spear Shield