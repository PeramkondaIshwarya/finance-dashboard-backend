

const Finance = require("../models/financeModel");
const mongoose = require("mongoose");
const { getSummary} = require("../services/dashboardService");

// GET /api/dashboard/summary
const summary = async (req, res) => {
  try {
    // Fetch all financial records
    const records = await Finance.find({});

    // Total income & expense
    const totalIncome = records
      .filter((r) => r.type === "income")
      .reduce((acc, r) => acc + r.amount, 0);

    const totalExpense = records
      .filter((r) => r.type === "expense")
      .reduce((acc, r) => acc + r.amount, 0);

    const netBalance = totalIncome - totalExpense;

    // Category-wise totals
    const categoryTotals = {};
    records.forEach((r) => {
      if (!categoryTotals[r.category]) categoryTotals[r.category] = 0;
      categoryTotals[r.category] += r.amount;
    });

    // Recent activity: last 5 records sorted by date
    const recentActivity = records
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);

    // Monthly trends (sum per month)
    const monthlyTrends = {};
    records.forEach((r) => {
      const month = new Date(r.date).toISOString().slice(0, 7); // YYYY-MM
      if (!monthlyTrends[month]) monthlyTrends[month] = { income: 0, expense: 0 };
      monthlyTrends[month][r.type] += r.amount;
    });

    res.json({
      totalIncome,
      totalExpense,
      netBalance,
      categoryTotals,
      recentActivity,
      monthlyTrends,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

module.exports = { summary,};

