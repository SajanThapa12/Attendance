const User = require('../models/User');

exports.getUserList = async (req, res) => {
    try{
        const users = await User.find({}, 'username role');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};