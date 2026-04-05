
const service = require("../services/authService");

const register = async (req, res, next) => {
  try {
    const user = await service.registerUser(req.body);
    res.status(201).json({ 
      success: true, 
      user 
    });
  } catch (e) {
     next(e); 
    }
};

const login = async (req, res, next) => {
  try {
    const data = await service.loginUser(req.body.email, req.body.password);
    res.status(200).json({ 
      success: true, 
      ...data 
    });
  } catch (e) { 
    next(e); 
  }
};

module.exports = { register, login };