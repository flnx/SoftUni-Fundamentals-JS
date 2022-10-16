function arrayModifier(arr) {
  let elements = arr.shift().split(' ').map(Number);

  const multiply = (n1, n2, index) => {
    elements.splice(Number(index), 1, elements[n1] * elements[n2]);
  };

  const decrease = () => (elements = elements.map((x) => (x -= 1)));

  const swap = (n1, n2) => {
    const elem1 = elements.splice(n1, 1);
    const elem2 = elements.splice(n2 - 1, 1);
    elements.splice(n1, 0, elem2[0]);
    elements.splice(n2, 0, elem1[0]);
  };

  const commands = { multiply, decrease, swap };

  for (let line of arr) {
    if (line == 'end') break;

    let [command, idx1, idx2] = line.split(' ');
    const index1 = Math.min(idx1, idx2);
    const index2 = Math.max(idx1, idx2);

    const fn = commands[command];
    fn(index1, index2, idx1);
  }
  console.log(elements.join(', '));
}

arrayModifier([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end',
]);

// 86, 7382, 2369942, -124, 41, 89, -3
