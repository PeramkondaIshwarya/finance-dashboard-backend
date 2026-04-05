
const User=require("../models/userModel");
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");

const registerUser = async ({ name, email, password }) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error("User already exists");

  const hashed = await bcryptjs.hash(password, 10);

  return await User.create({ name, email, password: hashed });
};


const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  
  const match = await bcryptjs.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return { user, token };
};
module.exports = { registerUser, loginUser };