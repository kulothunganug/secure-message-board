const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

router.post("/create", controller.create);
router.get("/list", controller.list);
router.delete("/delete/:id", controller.remove);

module.exports = router;
