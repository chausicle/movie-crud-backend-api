const express = require("express");
      router = express.Router();
      ctrl = require("../controllers/movies");

router.post("/", ctrl.createMovie);
router.get("/", ctrl.getAllMovies);
router.get("/:id", ctrl.getMovieById);
router.put("/:id", ctrl.updateMovie);
router.delete("/:id", ctrl.deleteMovie);

module.exports = router;
