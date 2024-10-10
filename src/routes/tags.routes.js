

const { Router } = require("express");

const tagsRouters = Router();

const TagsController = require("../controllers/TagsController");

const tagsController = new TagsController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

tagsRouters.get("/", ensureAuthenticated, tagsController.index);

module.exports = tagsRouters;