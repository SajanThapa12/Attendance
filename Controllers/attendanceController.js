const Attendance = require('../models/Attendance');
// const Attendance = require('../models/Attendance');

exports.markAttendance = async (req, res) => {
    const {userId, date, status } = req.body;
    try {
        const attendance = new Attendance({ user: userId, date, status });
        await attendance.save();
        res.status(201).json({ message: 'Attendance marked successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getAttendance = async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find().poopulate('user', 'username');
        res.json(attendanceRecords);
    } catch (error) {
        res.status(500).json({ error: 'Server error'});
    }
};