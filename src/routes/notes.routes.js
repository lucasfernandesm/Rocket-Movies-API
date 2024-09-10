

const { Router } = require("express");

const notesRouters = Router();

const NotesController = require("../controllers/NotesController");

const notesController = new NotesController();

notesRouters.post("/:user_id", notesController.create);
notesRouters.get("/:id", notesController.show);
notesRouters.delete("/:id", notesController.delete);
notesRouters.get("/", notesController.index);

module.exports = notesRouters;