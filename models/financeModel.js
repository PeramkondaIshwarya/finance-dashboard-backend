
const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" },
  amount: {
    type: Number, 
    required: true
    },
  type: { 
    type: String, 
    required: true,
    enum: ["income", "expense"] 
    },
  category:{
        type:String,
        required:true,
    },
  date: { 
    type: Date, 
    default: Date.now 
    },
  note:{
    type: String,
    trim: true,
    },
  isDeleted: { 
    type: Boolean, 
    default: false 
    },
}, 
{ timestamps: true });

module.exports = mongoose.model("Finance", financeSchema);