const express = require("express");
const router = express.Router();

const docsController = require("../controllers/docs.js");

router.get("/docs/create", docsController.create);
router.get("/docs/:fileName", docsController.getFileByName);

module.exports = router;