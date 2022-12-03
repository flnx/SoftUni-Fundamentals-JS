function fancyBarcodes(input) {
  const pattern = /@#+([A-Z][a-zA-Z0-9]{4,}[A-Z])@#+/;
  const digitsPattern = /\d+/g;
  const count = Number(input.shift());

  for (let i = 0; i < count; i++) {
    let line = input[i];
    let barcodeChecker = pattern.exec(line);

    if (barcodeChecker === null) {
      console.log('Invalid barcode');
      continue;
    }

    let group = barcodeChecker[1].match(digitsPattern);
    let output = '00';

    if (group !== null) {
      output = group.join('');
    }
    console.log(`Product group: ${output}`);
  }
}

fancyBarcodes(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che4s6E@##']);

console.log(`-----------------------`);

fancyBarcodes([
  '6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#',
]);
