

const { Router } = require("express");

const tagsRouters = Router();

const TagsController = require("../controllers/TagsController");

const tagsController = new TagsController();

tagsRouters.get("/:user_id", tagsController.index);

module.exports = tagsRouters;