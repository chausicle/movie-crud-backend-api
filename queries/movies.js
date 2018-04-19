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

};

const deleteMovie = (id) => {

};

module.exports ={
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie
}
