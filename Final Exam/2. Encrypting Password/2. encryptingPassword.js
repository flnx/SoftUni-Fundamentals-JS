function encryptingPassword(arr) {
  const regex = /(.*)>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<(.*)/;

  let n = +arr.shift() || 0;

  for (let i = 0; i < n; i++) {
    let line = arr[i];

    let match = line.match(regex);
    let password;

    if (match) {
      if (match[1] != match[6]) {
        console.log('Try another password!');
        continue;
      }

      password = match.slice(2, 6).join('');
      console.log(`Password: ${password}`);
    } else {
      console.log('Try another password!');
    }
  }
}

encryptingPassword([
  '3',
  '##>00|no|NO|!!!?<###',
  '##>123|yes|YES|!!!<##',
  '$$<111|noo|NOPE|<<>$$',
]);

// Try another password!
// Password: 123yesYES!!!
// Try another password!

console.log();

encryptingPassword([
  '5',
  'aa>111|mqu|BAU|mqu<aa',
  '()>111!aaa!AAA!^&*<()',
  'o>088|abc|AAA|***<o',
  'asd>asd|asd|ASD|asd<asd',
  '*>088|zzzz|ZzZ|123<*',
]);

// Password: 111mquBAUmqu
// Try another password!
// Password: 088abcAAA***
// Try another password!
// Try another password!
