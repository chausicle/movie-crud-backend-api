const movieQuery = require("../../queries/movies");

const createMovie = async (movie) => {
  const errors = checkFields(movie);
  if (errors.length > 0) {
    return {
      status: 400,
      message: "Missing fields: ",
      errors
    };
  }

  const result = await movieQuery.createMovie(movie)
  return result;
};

const getAllMovies = async () => {
  const movies = await movieQuery.getAllMovies();

  return movies;
};

const getMovieById = async (id) => {
  if (typeof Number(id) !== "number") {
    return {
      status: 404,
      message: "Not Found",
      errors: `Could not find movie of id ${id}`
    }
  }

  const movie = await movieQuery.getMovieById(id);
  if (!movie) {
    return {
      status: 404,
      message: "Not Found",
      errors: `Could not find movie of id ${id}`
    }
  }

  return movie
};

const updateMovie = async (id, movie) => {
  const movieById = await getMovieById(id);
  if (movieById.status === 404) return movieById;

  const errors = checkFields(movie);
  if (errors.length > 0) {
    return {
      status: 400,
      message: "Missing fields: ",
      errors
    };
  }

  const result = await movieQuery.updateMovie(id, movie);
  return result;
};

const deleteMovie = async (id) => {
  const movieById = await getMovieById(id);
  if (movieById.status === 404) return movieById;

  const result = await movieQuery.deleteMovie(id);
  return result;
};

const checkFields = ({ title, director, year, my_rating, image }) => {
  let errors = [];
  if (!title) errors.push("Title field is missing");
  if (!director) errors.push("Director field is missing");
  if (!year) errors.push("Year field is missing");
  if (!my_rating) errors.push("My Rating field is missing");
  if (!image) errors.push("image field is missing");

  return errors;
};


module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie
};
