module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/movieCrud_dev"
  },
  production: {
    client: "pg",
    connection: "",
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
