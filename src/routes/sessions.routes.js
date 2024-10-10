

const { Router } = require("express");

const sessionsRouters = Router();

const SessionsController = require("../controllers/SessionsController");

const sessionsController = new SessionsController();

sessionsRouters.post("/", sessionsController.create);

module.exports = sessionsRouters;