'use strict';

const express = require("express");
const router = express.Router();

const homeController = require('../controllers/homeController.js');
const vaultController = require('../controllers/vaultController.js');

router.get("/", homeController.getIndex);
router.get("/vault/", vaultController.getIndex);
router.get("/vault/functions/numbers", vaultController.getNumbers);

module.exports = router;