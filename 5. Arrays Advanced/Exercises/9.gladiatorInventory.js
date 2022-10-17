function solve(arr) {
  let inventory = arr.shift().split(' ');

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(' ');
    let item = command[1];

    switch (command[0]) {
      case 'Buy':
        buy(item);
        break;
      case 'Trash':
        trash(item);
        break;
      case 'Repair':
        repair(item);
        break;
      case 'Upgrade':
        upgrade(item);
        break;
    }
  }
  console.log(inventory.join(' '));
  function buy(equipment) {
    if (!inventory.includes(equipment)) {
      inventory.push(equipment);
    }
    return inventory;
  }

  function trash(equipment) {
    if (inventory.includes(equipment)) {
      let index = inventory.indexOf(equipment);
      inventory.splice(index, 1);
    }
    return inventory;
  }

  function repair(equipment) {
    if (inventory.includes(equipment)) {
      let index = inventory.indexOf(equipment);
      let getItem = inventory.splice(index, 1);
      inventory.push(getItem[0]);
    }
    return inventory;
  }

  function upgrade(equipment) {
    let newItem = equipment.split('-');
    if (inventory.includes(newItem[0])) {
      let index = inventory.indexOf(newItem[0]);
      newItem = newItem.join(':');
      inventory.splice(index + 1, 0, newItem);
      return inventory;
    }
  }
}
solve([
  'SWORD Shield Spear',
  'Buy Bag',
  'Trash Shield',
  'Repair Spear',
  'Upgrade SWORD-Steel',
]);

solve(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);

// ? without functitons

// function solve(arr) {

//     let inventory = arr.shift().split(' ');

//     for (let i = 0; i < arr.length; i++) {

//         let command = arr[i].split(' ');
//         let item = command[1];

//         switch (command[0]) {
//             case 'Buy':
//                 if (!inventory.includes(item)) {
//                     inventory.push(item);
//                 }
//                 break;
//             case 'Trash':
//                 if (inventory.includes(item)) {
//                     let index = inventory.indexOf(item);
//                     inventory.splice(index, 1);
//                 }
//                 break;
//             case 'Repair':
//                 if (inventory.includes(item)) {
//                     let index = inventory.indexOf(item);
//                     let getItem = inventory.splice(index, 1);
//                     inventory.push(getItem[0]);
//                 }
//                 break;
//             case 'Upgrade':
//                 let newItem = item.split('-');

//                 if (inventory.includes(newItem[0])) {
//                     let index = inventory.indexOf(newItem[0]);
//                     newItem = newItem.join(':');
//                     inventory.splice(index + 1, 0, newItem);

//                 }
//                 break;
//         }
//     }
//     console.log(inventory.join(' '));
// }
