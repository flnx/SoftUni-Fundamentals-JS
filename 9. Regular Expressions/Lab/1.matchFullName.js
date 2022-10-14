function matchFullName(input) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let result = input.match(pattern);

  console.log(result.join(' '));
}
matchFullName(
  'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov'
);

// Ivan Ivanov Test Testov