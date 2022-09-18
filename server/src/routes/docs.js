const express = require("express");
const router = express.Router();

const docsController = require("../controllers/docs.js");

router.post("/docs/create", docsController.createOne);
router.get("/docs/:fileName", docsController.getFileByName);

module.exports = router;