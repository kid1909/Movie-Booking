import User from '../models/UserModel.js'


export const getCurrentUser = async (req,res)=> {
    const user = await User.findOne(req.body.email)
    
    res.json({msg:`Hello ${user.name}`})
}