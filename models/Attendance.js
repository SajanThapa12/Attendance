const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    reruired: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["present", "absent"],
  },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
