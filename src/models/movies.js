const movieQuery = require("../../queries/movies");

const createMovie = async ({ title, director, year, my_rating, image }) => {
  let errors = [];
  if (!title) errors.push("Title field is missing");
  if (!director) errors.push("Director field is missing");
  if (!year) errors.push("Year field is missing");
  if (!my_rating) errors.push("My Rating field is missing");
  if (!image) errors.push("image field is missing");

  if (errors.length > 0) {
    return {
      status: 400,
      message: "Missing fields: ",
      errors
    };
  }
  const result = await movieQuery.createMovie({ title, director, year, my_rating, image })

  return result;
};

const getAllMovies = async () => {
  const movies = await movieQuery.getAllMovies();

  return movies;
};

const getMovieById = async (id) => {
  if (typeof id !== "number") {
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

const updateMovie = (id, body) => {
  const result = movieQuery.updateMovie(id, body);


};

const deleteMovie = (id) => {
  const result = movieQuery.deleteMovie(id);


};



module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie
};
