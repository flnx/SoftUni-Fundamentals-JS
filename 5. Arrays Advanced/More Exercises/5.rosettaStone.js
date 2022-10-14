function rosettaStone(input) {
  const tempLenght = Number(input.shift());
  const template = [];

  for (let i = 0; i < tempLenght; i++) {
    const line = input.shift();
    template.push(line.split(' ').map(Number));
  }

  const matrix = [];

  for (let line of input) {
    matrix.push(line.split(' ').map(Number));
  }
  
  let result = '';

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      // current index position
      const index = matrix[row][col];
      // template overlay
      const templateDecoder = template[row % tempLenght][col % template[0].length];
      const output = ((index + templateDecoder) % 27) + 64;
      result += String.fromCharCode(output);
    }
  }

  const pattern = /@/g;
  result = result.replace(pattern, ' ');
  console.log(result);
}

rosettaStone([
  '2',
  '59 36',
  '82 52',
  '4 18 25 19 8',
  '4 2 8 2 18',
  '23 14 22 0 22',
  '2 17 13 19 20',
  '0 9 0 22 22',
]);

// I CAME I SAW I CONQUERED 