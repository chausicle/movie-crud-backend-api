const model = require("../models/movies");

const createMovie = async (req, res, next) => {
  const result = await model.createMovie(req.body);

  if (result.errors)
    return next(sendErrors(result));

  res.status(201).json(result);
};

const getAllMovies = async (req, res, next) => {
  const result = await model.getAllMovies();

  res.status(200).json(result);
};

const getMovieById = async (req, res, next) => {
  const result = await model.getMovieById(req.params.id);

  if (result.errors)
    return next(sendErrors(result));

  res.status(200).json(result);
};

const updateMovie = (req, res, next) => {
  const result = model.updateMovie(req.params.id, req.body);

  if (result.errors)
    return next(sendErrors(result));

  res.status(200).json(result);
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
