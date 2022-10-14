// solution 1
function pascalCaseSplitter(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90 && i !== 0) {
      result += ', ' + text[i];
    } else {
      result += text[i];
    }
  }
  console.log(result);
}
// solution 2

function pascalCaseSplitter(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase() && i !== 0) {
      result += ', ' + text[i];
    } else {
      result += text[i];
    }
  }
  console.log(result);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'); // Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
