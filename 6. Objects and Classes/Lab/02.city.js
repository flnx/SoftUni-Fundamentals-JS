function city(data) {
  for (let key of Object.keys(data)) {
    let currentKey = data[key];
    console.log(`${key} -> ${currentKey}`);
  }
}

city({
  name: 'Sofia',
  area: 492,
  population: 1238438,
  country: 'Bulgaria',
  postCode: '1000',
});


// name -> Sofia
// area -> 492
// population -> 1238438
// country -> Bulgaria
// postCode -> 1000
