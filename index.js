import express from 'express';
import User from './models/User.js';

const app = express();
app.use(express.json())



app.post('/api/user', async (req, res) => {
    const { name, email } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    try {
        const newUser = await User.create({ name, email });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})


app.listen(3000, () => {
    console.log('server is running at port number 3000')
});