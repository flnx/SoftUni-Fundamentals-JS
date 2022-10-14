function modernTimesofHashTag(text) {
  let result = text.split(' ');

  for (let ch of result) {
    if (ch.startsWith('#') && ch.length > 1) {
      let isValid = true;
      for (let i = 0; i < ch.length; i++) {
        if (ch.charCodeAt(i) >= 49 && ch.charCodeAt(i) <= 57) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        console.log(ch.substring(1));
      }
    }
  }
}

modernTimesofHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');

// special
// socialMedia
