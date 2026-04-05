
const service = require("../services/financeService");

const createFinance = async (req, res, next) => {
  try {
    const data = await service.createRecord(req.body, req.user.id);
    res.status(201).json({ 
      success: true, 
      data 
    });
  } catch (e) { next(e);}
};

const getFinance = async (req, res, next) => {
  try {
    const data = await service.getRecords(req.user, req.query);
    res.status(200).json({
       success: true, 
       data 
      });
  } catch (e) { next(e); }
};

const updateFinance = async (req, res, next) => {
  try {
    const data = await service.updateRecord(
      req.params.id,
      req.body,
      req.user
    );

    res.status(200).json({ 
      success: true, 
      data 
    });
  } catch (e) {
    next(e);
  }
};
const deleteFinance = async (req, res, next) => {
  try {
    const data = await service.deleteRecord(req.params.id, req.user);

    res.status(200).json({ 
      success: true,
       data 
      });
  } catch (e) {
    next(e);
  }
};
module.exports = { createFinance, getFinance, updateFinance, deleteFinance };