function passwordGenerator(arr) {
  let keySentence = arr[0].concat(arr[1]).toLowerCase();
  let keyWord = arr[2].toUpperCase();
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let keyCounter = 0;

  for (let ch of keySentence) {
    if (vowels.includes(ch)) {
      keySentence = keySentence.replace(ch, keyWord[keyCounter]);
      keyCounter++;
    }
    if (keyCounter >= keyWord.length) {
      keyCounter = 0;
    }
  }
  let result = keySentence.split('').reverse().join('');
  console.log(`Your generated password is ${result}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
