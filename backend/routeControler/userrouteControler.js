import User from "../Models/userModels.js";
import bcrypt from 'bcryptjs'
import jwtToken from '../utils/jwtwebToken.js'
export const userRegister = async (req, res) => {
  try {
    const { fullname, username, email, gender, password, profilepic } = req.body;
    const user = await User.findOne({
      $or: [{ username }, { email }]
    });
    if (user) return res.status(500).send({ success: false, message: "username or email Alredy exists" })
    const hashPassword = bcrypt.hashSync(password, 10);
    const profileGirl = profilepic || `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const profileBoy = profilepic || `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      email,
      password: hashPassword,
      gender,
      profilepic: gender === "male" ? profileBoy : profileGirl
    })
    if (newUser) {
      await newUser.save();
      jwtToken(newUser._id, res)
    }
    // else {
    //   res.status(500).send({ success: false, message: "Invalid User Data" })
    // }
    res.status(201).send({
      _id: newUser._id,
      fullname: newUser.fullname,
      username: newUser.username,
      profilepic: newUser.profilepic,
      email: newUser.email,

    })
  }
  catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    })
    console.log(error);
  }
}
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) return res.status(404).send({
      success: false,
      message: "Email Doesn't Exists Register"
    })
    const comparePass =  await bcrypt.compare(password, user.password );
    if (!comparePass) return res.status(401).send({ success: false, message: "Email Or Password doesn't Matching" })

     jwtToken(user._id,res)
      res.status(200).send({
        _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilepic: user.profilepic,
      email: user.email,
      messaage:"Sucessfully Login"
    })
  }
  catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    })
    console.log(error);
  }
}
export const userLogOut=async(req,res)=>{
  try{
    
res.cookie("jwt",'',{
  maxAge:0
})
 return res.status(200).send({message:"user Logout"})
  }
  catch(error){
    res.status(500).send({
      success:false,
      message:error.message
    });
    console.log(error);
  }
}