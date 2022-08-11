function solve(totalPages, pagesReadPerHour, daysRequired) {
  let requiredReadingTime = totalPages / pagesReadPerHour;
  let daysNeededToReadAll = requiredReadingTime / daysRequired;

  console.log(daysNeededToReadAll);
}

solve(432, 15, 4.85);
