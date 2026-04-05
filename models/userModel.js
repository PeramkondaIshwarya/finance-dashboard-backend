
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:{
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  email: { 
    type: String, 
    unique: true ,
    required:true,
    trim: true,
    lowercase: true
  },
  password:{
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    enum: ["viewer", "analyst", "admin"],
    default: "viewer",
  },
  isActive: { type: Boolean, default: true },
}, 
{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);