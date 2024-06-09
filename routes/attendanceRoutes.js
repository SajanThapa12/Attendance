const express = require('express');
const router = express.Router();
const attendanceController = require('../Controllers/attendanceController');
//router.get('/delete', attendanceController.getAttendance);

router.get('/', attendanceController.getAttendance);
router.post('/mark', attendanceController.getAttendance);
// router.get('/list', attendanceController.getAttendanceList);


module.exports = router;