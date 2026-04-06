const Finance = require("../models/financeModel");

// Basic summary
const getSummary = async (userId) => {
  const data = await Finance.find({ user: userId, isDeleted: false });

  let income = 0, expense = 0;

  data.forEach((item) => {
    if (item.type === "income") income += item.amount;
    else expense += item.amount;
  });

  return {
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
  };
};

// Category totals
const categoryTotals = async (userId) => {
  return await Finance.aggregate([
    { $match: { user: userId, isDeleted: false } },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
  ]);
};

// Monthly trends
const monthlyTrends = async (userId) => {
  return await Finance.aggregate([
    { $match: { user: userId, isDeleted: false } },
    {
      $group: {
        _id: { $month: "$date" },
        total: { $sum: "$amount" },
      },
    },
  ]);
};

// Recent activity
const recentActivity = async (userId) => {
  return await Finance.find({ user: userId })
    .sort({ createdAt: -1 })
    .limit(5);
};


module.exports = {
  getSummary,
  categoryTotals,
  monthlyTrends,
  recentActivity,
 
};
