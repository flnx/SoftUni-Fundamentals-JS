function extractEmails(input) {
  let pattern =
    /(?<userName> [A-Za-z0-9]+[-.\w]*)(?<host>@[a-zA-Z-]+\.[a-zA-Z-]+[A-Za-z.]*)\b/g;

  let emails = input.match(pattern);
  if (emails !== null) {
    for (let email of emails) {
      console.log(email.trim());
    }
  }
}

extractEmails(
  'Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.'
);

// s.miller@mit.edu
// j.hopking@york.ac.uk