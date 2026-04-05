const express = require("express");
const { createFinance, getFinance,updateFinance,deleteFinance} = require("../controllers/financeController");
const { protect } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/roleMiddleware");
const { validateFinanceRecord } = require("../middlewares/validationMiddleware");



const router = express.Router();

router.post(
  "/",
  protect,
  authorize("admin"),
  validateFinanceRecord, 
  createFinance
);
router.get(
  "/",
  protect,
  authorize("viewer", "analyst", "admin"),
  getFinance
);
router.put(
  "/:id", 
  protect,  
  authorize("admin"),
  updateFinance
);
router.delete(
  "/:id",
  protect,
  authorize("admin"), 
  deleteFinance
);
module.exports = router;