const express = require("express");
const router = express.Router();
const sessionAuth = require("../middleware/authMiddleware");
const roleAuth = require("../middleware/roleMiddleware");
const attendanceController = require("../Controllers/attendanceController");
//router.get('/delete', attendanceController.getAttendance);

router.get("/", attendanceController.getAttendance);
router.post("/mark", attendanceController.getAttendance);
router.get(
  "/user-attendance-list",
  sessionAuth,
  attendanceController.getAttendanceList
);
router.post("/record", sessionAuth, attendanceController.recordAttendance);
module.exports = router;
