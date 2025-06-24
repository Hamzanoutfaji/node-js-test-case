import express from 'express';
import User from './models/User.js';

const app = express();
app.use(express.json())



app.post('/api/user',async (req, res)=>{
    const {id, name, email} = req.body;
    const newUser = await User.create({id, name, email})
    res.status(200).json(newUser)
})


app.listen( 3000 ,()=>{
    console.log('server is running at port number 3000')
});