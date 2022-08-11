function matchDates(input) {
  let pattern = new RegExp(/\b[\d]{2}(\/|\.|-)[A-Z]{1}[a-z]{2}\1[\d]{4}\b/, 'g');
  let regExSplit = /[-/.]/g;
  let result = input[0].match(pattern);

  for (const iterator of result) {
    let output = iterator.split(regExSplit);
    let [day, month, year] = output;
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}
matchDates([
  '13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016',
]);

// Output:
// Day: 13, Month: Jul, Year: 1928
// Day: 10, Month: Nov, Year: 1934
// Day: 25, Month: Dec, Year: 1937
