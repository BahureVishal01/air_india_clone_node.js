const express = require('express');
const router = require('./v1');
const apiRouter = express.Router();

apiRouter.use('/v1',  router)

module.exports = apiRouter;