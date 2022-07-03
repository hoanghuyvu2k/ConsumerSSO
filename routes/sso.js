const express = require("express");

const router = express.Router();
const AutoController = require("../controllers/authController");

router.route("/receiveToken").post(AutoController.receiveToken);

module.exports = router;
