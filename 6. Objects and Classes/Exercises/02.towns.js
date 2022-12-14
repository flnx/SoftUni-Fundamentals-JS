function towns(arr) {
  let myTown = {};

  for (const town of arr) {
    let [currentTown, latitude, longitude] = town.split(' | ');
    myTown.town = currentTown;
    myTown.latitude = Number(latitude).toFixed(2);
    myTown.longitude = Number(longitude).toFixed(2);

    console.log(myTown);
  }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);

// {town: 'Sofia', latitude: '42.70', longitude: '23.33'}
// {town: 'Beijing', latitude: '39.91', longitude: '116.36'}