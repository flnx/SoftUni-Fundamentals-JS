function partyTime(arr) {
  let vip = [];
  let regular = [];
  let isPartyStarted = false;

  for (let person of arr) {
    if (person === 'PARTY') {
      isPartyStarted = true;
      continue;
    }
    if (!isPartyStarted) {
      if (isNaN(person[0])) {
        regular.push(person);
      } else {
        vip.push(person);
      }
    } else {
      if (isNaN(person[0])) {
        let findIndex = regular.indexOf(person);
        regular.splice(findIndex, 1);
      } else {
        let findIndex = vip.indexOf(person);
        vip.splice(findIndex, 1);
      }
    }
  }

  let result = vip.length + regular.length;
  console.log(result);
  vip.forEach((a) => console.log(a));
  regular.forEach((a) => console.log(a));
}

partyTime([
  '7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
]);
