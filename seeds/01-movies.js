exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: "Kotonoha no Niwa (The Garden of Words)", director: "Shinkai Makoto", year: 2013, my_rating: 4, image: "https://i.pinimg.com/originals/1e/d2/9a/1ed29af5d493c9e7469ff40317ce1069.jpg"},
        {id: 2, title: "Kimi no Na wa (Your Name)", director: "Shinkai Makoto", year: 2016, my_rating: 5, image: "http://www.portalmie.com/sites/wp-content/uploads/2017/12/2E4DBE69-C5B7-4899-BF56-7FF6BBD218C2.jpeg"},
        {id: 3, title: "Koe no Katachi (A Silent Voice)", director: "Tsuruoka Youta", year: 2016, my_rating: 5, image: "http://i.imgur.com/KHxZPT6.jpg"},
      ]);
    });
};
