function fancyBarcodes(arr) {
  const regex = /@#+([A-Z][a-zA-Z\d]{4,}[A-Z])@#+/;
  let n = +arr[0];

  for (let i = 1; i <= n; i++) {
    let barcode = arr[i];
    let match = barcode.match(regex);

    if (match) {
      let group = match[1].split('').filter((x) => x == Number(x));
      group = group.join('') || '00';

      console.log(`Product group: ${group}`);
    } else {
      console.log('Invalid barcode');
    }
  }
}
fancyBarcodes(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che4s6E@##']);

console.log();

fancyBarcodes([
  '6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#',
]);
