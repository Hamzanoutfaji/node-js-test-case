import User from "../models/User.js"

export const createUser = async (req, res) => {
    const { name, email } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    try {
        const newUser = await User.create({ name, email })
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).send('internal server error')
        console.log(error)
    }
}

export const getAllUsers = async (req, res) => {

    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).send("internal server error")
    }

}

export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        console.log("the parameters that are being passed are  ",req.params)
        const deletedUser = await User.destroy({where: {id:id}})
        res.status(200).send(deletedUser)

    } catch (error) {
        console.log(error)
        res.status(500).send('internal server error')
    }
}

