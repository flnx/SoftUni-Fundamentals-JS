function companyUsers(arr) {
  let usersInfo = new Map();

  for (let iterator of arr) {
    let [company, id] = iterator.split(' -> ');
    if (!usersInfo.has(company)) {
      usersInfo.set(company, new Set());
    }
    usersInfo.get(company).add(id);
  }

  let sorted = Array.from(usersInfo).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [company, employees] of sorted) {
    console.log(company);
    for (let employee of employees) {
      console.log(`-- ${employee}`);
    }
  }
}

companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> BB12345',
  'Microsoft -> CC12345',
  'HP -> BB12345',
]);

// HP
// -- BB12345
// Microsoft
// -- CC12345
// SoftUni
// -- AA12345
// -- BB12345
