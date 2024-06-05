const express = require ('express');
const connectDB = require('./config/db')
const bodyParser = require('body-parser');
const app = express();


//Init middleware

app.use(express.json());
app.use('/api/attendance', require('./routes/attendanceRoutes'));

app.use(bodyParser.json()); 
app.post('/attendance', (req, res) => {
    const { username, password } = req.body;
    res.json({ receivedData: req.body});
});

// app.post('/login', (req, res) => {
//     const {username, password } = req.body;
//     const user = User.find(user = User.username === username);
//  if (!user) 

// })
const PORT = process.env.PORT || 5000;

app.listen( PORT, async () =>{
    await connectDB;
    console.log(`Server started on port ${PORT}`)
});