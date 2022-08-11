function phoneBook(arr) {
  let addressList = {};

  for (const iterator of arr) {
    let [name, address] = iterator.split(':');
    addressList[name] = address;
  }

  let addressListSorted = Object.entries(addressList).sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  for (let [name, address] of addressListSorted) {
    console.log(`${name} -> ${address}`);
  }
}
phoneBook([
  'Bob:Huxley Rd',
  'John:Milwaukee Crossing',
  'Peter:Fordem Ave',
  'Bob:Redwing Ave',
  'George:Mesta Crossing',
  'Ted:Gateway Way',
  'Bill:Gateway Way',
  'John:Grover Rd',
  'Peter:Huxley Rd',
  'Jeff:Gateway Way',
  'Jeff:Huxley Rd',
]);
