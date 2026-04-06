const express = require("express");
const { summary} = require("../controllers/dashboardController");
const { protect } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/roleMiddleware");

const router = express.Router();

// Only analysts and admins can access the summary
router.get("/summary", protect, authorize("viewer", "analyst", "admin"), summary);


module.exports = router;