const express  = require('express');
const app = express();
const port = 4000;
const connectDB = require('./config/db')
const movieRoute = require('./routes/movieRoute');
const cors = require('cors');


connectDB();
app.use(cors())
app.use(express.json());
app.use('/movies',movieRoute);
app.get('/',(req,res)=>{
    res.status(200).send('Hello world !!');
});


app.listen(port,()=>{
    console.log(`Server is Running With https://localhost:${port}`);
});

