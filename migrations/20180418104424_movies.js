exports.up = function(knex, Promise) {
 return knex.schema.createTable("movies", table => {
   table.increments()
   table.string("title").notNullable().defaultsTo("")
   table.string("director").notNullable().defaultsTo("")
   table.integer("year").notNullable().defaultsTo(0)
   table.integer("my_rating").notNullable().defaultsTo(0)
   table.string("image").notNullable().defaultsTo("")
   table.timestamps(true, true)
 });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable("movies");
};
