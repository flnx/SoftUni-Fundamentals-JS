function numbers(integers) {
  let mapping = integers.split(' ').map(Number);
  let avg = mapping.reduce((acc, x) => acc + x) / mapping.length;

  const result = mapping.filter((x) => x > avg);

  if (result.length > 0) {
    return result
      .sort((a, b) => b - a)
      .slice(0, 5)
      .join(' ');
  }
  return 'No';
}

console.log(numbers('10 20 30 40 50'));
// Output:
// 50 40