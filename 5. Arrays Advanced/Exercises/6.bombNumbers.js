function solve(field, special) {
  let specialNumber = special[0];
  let specialPower = special[1];

  while (field.includes(specialNumber)) {
    let index = field.indexOf(specialNumber);
    let detonationPower = specialPower * 2 + 1;
    let range = index - specialPower;

    if (range < 0) {
      detonationPower += range;
      range = 0;
    }

    field.splice(range, detonationPower);
  }

  console.log(field.reduce((a, b) => a + b, 0));
}
solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);

//     let specials = special.join(' ').split(' ');
//     let specialNumber = special[0];

//     while (field.includes(specialNumber)) {
//         let index = field.indexOf(specialNumber);
//         let leftSideSpecial = +specials[1].slice();
//         let rightSideSpecial = +specials[1].slice();

//         if (index - leftSideSpecial < 0) {
//             leftSideSpecial = (index - leftSideSpecial) + leftSideSpecial;
//         }

//         if (index + rightSideSpecial > field.length) {
//             rightSideSpecial = field.length - (index + 1);
//         }

//         let range = index - leftSideSpecial;
//         let detonation = leftSideSpecial + rightSideSpecial + 1;

//         field.splice(range, detonation);
//     }

//     console.log(field.reduce((a, b) => a + b, 0));

// }
// solve([1, 4, 4, 2, 8, 9, 1],
//     [9, 3])
