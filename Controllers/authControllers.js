const User = require ('../models/User');
 

exports.register = async (req, res) => {
    const { username, password, role} = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ error: 'Username already taken' });
         
        const newUser = new User ({ username, password, role });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
};


exports.login = async (req, res) => {
    const { username, password} = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) 
        return res.status(400).json({ error: 'Invalid credentials' });

        if (password!== user.password)
         return res.status(400).json({ error: 'Invalid credentials'});
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};