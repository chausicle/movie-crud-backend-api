const model = require("../models/movies");

const createMovie = (req, res, next) => {
  const result = model.createMovie(req.body);

  if (result.errors)
    return next(sendErrors(result));

  res.status(201).json({ result });
};

const getAllMovies = (req, res, next) => {
  const result = model.getAllMovies();

  res.status(200).json({ result });
};

const getMovieById = (req, res, next) => {
  const result = model.getMovieById(req.params.id);

  if (result.errors)
    return next(sendErrors(result));

  res.status(200).json({ result });
};

const updateMovie = (req, res, next) => {
  const result = model.updateMovie(req.params.id, req.body);

  if (result.errors)
    return next(sendErrors(result));

  res.status(200).json({ result });
};

const deleteMovie = (req, res, next) => {
  const result = model.deleteMovie(req.params.id);

  res.status(204).json();
};

const sendErrors = (result) => {
  return {
    status: result.status,
    message: result.message,
    errors: result.errors
  };
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie
};
