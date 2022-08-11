function cutAndReverse(text) {
  let textLength = text.length;
  let textReversed = text.split('').reverse('').join('');
  let halfOne = textReversed.slice(textLength / 2, textLength);
  let halfTwo = textReversed.slice(0, textLength / 2);

  console.log(halfOne);
  console.log(halfTwo);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');

// output: ThisIsDifficult
// output: ThisIsSoAmazing
