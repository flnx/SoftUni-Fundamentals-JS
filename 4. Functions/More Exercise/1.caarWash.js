function solve(arr) {
  let cleaned = 0;

  soap = (x) => (cleaned += x);
  water = (x) => (cleaned = cleaned * x);
  vacuum = (x) => (cleaned = cleaned * x);
  mud = (x) => (cleaned = cleaned * x);

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'soap':
        soap(10);
        break;
      case 'water':
        water(1.2);
        break;
      case 'vacuum cleaner':
        vacuum(1.25);
        break;
      case 'mud':
        mud(0.9);
        break;
    }
  }
  console.log(`The car is ${cleaned.toFixed(2)}% clean.`);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
solve(['soap', 'water', 'mud', 'mud', 'water', 'mud', 'vacuum cleaner']);

// function solve(arr) {

//     let cleaned = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let num = 0;

//         switch (arr[i]) {
//             case 'soap': num = 10; soap(num); break;
//             case 'water': num = 1.20; water(num); break;
//             case 'vacuum cleaner': num = 1.25; vacuum(num); break;
//             case 'mud': num = 0.90; mud(num); break;
//         }
//     }

//     console.log(`The car is ${cleaned.toFixed(2)}% clean.`);

//     function soap(num) {
//         cleaned += num;
//     }
//     function water(num) {
//         cleaned = cleaned * num;
//     }
//     function vacuum(num) {
//         cleaned = cleaned * num;
//     }
//     function mud(num) {
//         cleaned = cleaned * num;
//     }
// }
