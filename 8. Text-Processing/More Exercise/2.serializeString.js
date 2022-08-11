// solution 1
function serializeString(arr) {
  let text = arr[0].split('');
  let textLen = text.length;
  let result = {};

  for (let i = 0; i < textLen; i++) {
    let letter = text[i];
    if (!result.hasOwnProperty(letter)) {
      result[letter] = [];
    }

    result[letter].push(i);
    text[i] = '';
  }

  for (let [key, value] of Object.entries(result)) {
    console.log(`${key}:${value.join('/')}`);
  }
}

serializeString(['avjavamsdmcalsdm']);
