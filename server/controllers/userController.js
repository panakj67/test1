import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";




export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email })

    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist.",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    
    res.cookie('token', token, {
        httpOnly : true,
        secure : true,
        sameSite : 'none',
        maxAge : 3 * 24 * 60 * 60 * 1000
    })

    return res.json({ success: true, message: "LoggedIn successfully!", user });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      return res.json({ success: false, message: "User already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    res.cookie('token', token, {
        httpOnly : true,
        secure : true,
        sameSite : 'None',
        maxAge : 3 * 24 * 60 * 60 * 1000
    })

    return res.json({
      success: true,
      message: "User created successfully!",
      user: newUser,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const isAuthorised = async (req, res) => {
  try {
    if (!req.user) {
      return res.json({ success: false, message: "You are not authorised" });
    }
    const user = userModel.find({id : req.user._id}).select("-password")
    return res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "None", // Required for cross-site cookies
      secure: true,
    });
    console.log("logging out");
    res.json({ success: true, message: "Logout Successfully!" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

