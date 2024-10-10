

const { Router } = require("express");

const notesRouters = Router();

const NotesController = require("../controllers/NotesController");

const notesController = new NotesController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

notesRouters.use(ensureAuthenticated); 

notesRouters.post("/", notesController.create);
notesRouters.get("/:id", notesController.show);
notesRouters.delete("/:id", notesController.delete);
notesRouters.get("/", notesController.index);

module.exports = notesRouters;