const movieQuery = require("../../queries/movies");

const createMovie = (req, res, next) => {
  const result = movieQuery.createMovie(req.body);


};

const getAllMovies = (req, res, next) => {
  const result = movieQuery.getAllMovies();


};

const getMovieById = (req, res, next) => {
  const result = movieQuery.getMovieById(req.params.id);


};

const updateMovie = (req, res, next) => {
  const result = movieQuery.updateMovie(req.params.id, req.body);


};

const deleteMovie = (req, res, next) => {
  const result = movieQuery.deleteMovie(req.params.id);


};



module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie
};
