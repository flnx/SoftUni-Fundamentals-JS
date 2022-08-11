function movies(movies) {
  let moviesList = [];

  for (let movie of movies) {
    if (movie.includes('addMovie')) {
      let getMovie = movie.replace('addMovie ', '');
      moviesList.push({ name: getMovie });
    } else if (movie.includes('directedBy')) {
      let [name, director] = movie.split(' directedBy ');
      for (let movie of moviesList) {
        if (movie.name === name) {
          movie.director = director;
        }
      }
    } else if (movie.includes('onDate')) {
      let [name, date] = movie.split(' onDate ');

      for (let movie of moviesList) {
        if (movie.name === name) {
          movie.date = date;
        }
      }
    }
  }

  for (const movie of moviesList) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}

movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen',
]);
