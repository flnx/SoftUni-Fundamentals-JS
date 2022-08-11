function adressBook(arr) {
  let phoneList = {};

  for (let el of arr) {
    let [name, number] = el.split(' ');
    phoneList[name] = number;
  }

  for (let key in phoneList) {
    console.log(`${key} -> ${phoneList[key]}`);
  }
}
adressBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
