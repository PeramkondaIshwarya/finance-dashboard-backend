// const express = require("express");
// const router = express.Router();

// const {
//   getUsers,
//   updateRole,
//   toggleStatus,
// } = require("../controllers/userController");

// const { protect } = require("../middlewares/authMiddleware");
// const { authorize } = require("../middlewares/roleMiddleware");

// // Admin only routes
// router.get("/", protect, authorize("admin"), getUsers);
// router.put("/:id/role", protect, authorize("admin"), updateRole);
// router.put("/:id/status", protect, authorize("admin"), toggleStatus);

// module.exports = router;



const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  toggleUserStatus,
} = require("../controllers/userController");

const { protect } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/roleMiddleware");

// 🔒 ADMIN ONLY ROUTES

// Get all users
router.get("/", protect, authorize("admin"), getUsers);

// Get single user
router.get("/:id", protect, authorize("admin"), getUserById);

// Update user
router.put("/:id", protect, authorize("admin"), updateUser);

// Delete user
router.delete("/:id", protect, authorize("admin"), deleteUser);

// Toggle active status
router.put("/toggle/:id", protect, authorize("admin"), toggleUserStatus);

module.exports = router;