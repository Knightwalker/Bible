const express = require("express");
const router = express.Router();

const docsController = require("../controllers/docs.js");

router.get("/docs/all", docsController.getAll);
router.post("/docs/create", docsController.createOne);
router.get("/docs/read/:id", docsController.getOneById);
router.post("/docs/edit/:id", docsController.editOneById);
router.get("/docs/:fileName", docsController.getFileByName);

module.exports = router;