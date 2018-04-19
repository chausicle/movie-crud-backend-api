const knex = require("./db");

const createMovie = (movie) => {
  return knex("movies")
    .insert(movie)
    .returning("*");
};

const getAllMovies = () => {
  return knex("movies")
    .select("");
};

const getMovieById = (id) => {
  return knex("movies")
    .where({ id })
    .first();
};

const updateMovie = (id, movie) => {
  return knex("movies")
    .where({ id })
    .update(movie)
    .returning("*");
};

const deleteMovie = (id) => {
  return knex("movies")
    .where({ id })
    .del();
};

module.exports ={
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie
}
