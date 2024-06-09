const express = require ('express');
const connectDB = require('./config/db')
const bodyParser = require('body-parser');
const app = express();
const User = require ('./models/User');
const mongoose = require('mongoose')


//Init middleware

app.use(express.json());
app.use('/api/attendance', require('./routes/attendanceRoutes'));

app.use(bodyParser.json()); 
                            

app.post ('/register', async(req, res) => {
     const{username, password} = req.body;
     
     let existingUser = await User.findOne({ username });

     if (existingUser) {
        return res.status(400).json({ error: 'Username already taken.'});
     }
     const newUser = new User({ username, password });
     await newUser.save();
    res.status(201).json({ message: 'Registration successful.'});
});

app.post('/attendance', (req, res) => {
    const { username, password } = req.body;
    res.json({ receivedData: req.body});
});

app.post('/login', async(req, res) => {
    const {username, password } = req.body;
    const user= await User.find({username});
 if (!user) {
    return res.status(401).json({ error: 'Invalid username or password.'});
 } 
 if (password!== user.password) {
    return res.status(401).json({ error: 'Invalid username or password.'});
 }
 res.json({ message:'Login succesfully.' , user});
});
const PORT = process.env.PORT || 5000;

app.listen( PORT, async () =>{
    await mongoose.connect('mongodb+srv://sajan:MzQaVUTjNO9EbVAa@cluster0.toiqkbi.mongodb.net/m-db?retryWrites=true&w=majority&appName=Cluster0');
    console.log('MongoDB connected...');
    console.log(`Server started on port ${PORT}`)
});

