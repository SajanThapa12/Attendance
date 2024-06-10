const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const sessionAuth = require("../middleware/authMiddleware");
const roleAuth = require("../middleware/roleMiddleware");

// Get user list route
router.get(
  "/list",
  sessionAuth,
  roleAuth(["admin"]),
  userController.getUserList
);

module.exports = router;
