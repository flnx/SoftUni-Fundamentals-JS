function solve(groupSize, groupType, day) {
  let price = 0;

  switch (groupType) {
    case 'Students':
      switch (day) {
        case 'Friday':
          price += groupSize * 8.45;
          break;
        case 'Saturday':
          price += groupSize * 9.8;
          break;
        case 'Sunday':
          price += groupSize * 10.46;
          break;
      }
      if (groupSize >= 30) {
        price = price * 0.85;
      }
      break;
    case 'Business':
      if (groupSize >= 100) {
        groupSize -= 10;
      }
      switch (day) {
        case 'Friday':
          price += groupSize * 10.9;
          break;
        case 'Saturday':
          price += groupSize * 15.6;
          break;
        case 'Sunday':
          price += groupSize * 16;
          break;
      }
      break;
    case 'Regular':
      switch (day) {
        case 'Friday':
          price += groupSize * 15;
          break;
        case 'Saturday':
          price += groupSize * 20;
          break;
        case 'Sunday':
          price += groupSize * 22.5;
          break;
      }
      if ((groupSize >= 10) & (groupSize <= 20)) {
        price = price * 0.95;
      }
      break;
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}

solve(40, 'Business', 'Saturday');
