function deserializeString(arr) {
  let result = [];

  for (let token of arr) {
    if (token === 'end') {
      break;
    }

    let [el, indexes] = token.split(':');
    indexes = indexes.split('/');

    for (let i of indexes) {
      i = Number(i);
      result[i] = el;
    }
  }

  console.log(result.join(''));
}

deserializeString(['a:0/2/4/6', 'b:1/3/5', 'end']); // abababa
deserializeString([
  'a:0/3/5/11',
  'v:1/4',
  'j:2',
  'm:6/9/15',
  's:7/13',
  'd:8/14',
  'c:10',
  'l:12',
  'end',
]); // avjavamsdmcalsdm
