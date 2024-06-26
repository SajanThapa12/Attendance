const Attendance = require("../models/Attendance");
const User = require("../models/User");
// const Attendance = require('../models/Attendance');

exports.markAttendance = async (req, res) => {
  const { userId, date, status } = req.body;
  try {
    const attendance = new Attendance({ user: userId, date, status });
    await attendance.save();
    res.status(201).json({ message: "Attendance marked successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
exports.recordAttendance = async (req, res) => {
  const { userId, date, status } = req.body;
  try {
    const attendance = new Attendance({ user: userId, date, status });
    await attendance.save();
    res.status(201).json({ message: "Attendance recorded successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAttendanceList = async (req, res) => {
  try {
    const getAttendanceList = await Attendance.find().populate(
      "user",
      "username"
    );
    res.json(attendanceList);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find().poopulate(
      "user",
      "username"
    );
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteAttendance = async (req, res) => {
  const { id } = req.body;
  try {
    const attendance = await Attendance.findByIdAndDelete(id);
    if (!attendance) {
      return res.status(404).json({ error: "Attendance record not found" });
    }
    res.json({ message: "Attendance record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
