
const Finance = require("../models/financeModel");

const createRecord = async (data, userId) => {
  return await Finance.create({ ...data, user: userId });
};

const getRecords = async (user, query) => {
  const { type, category } = query;

  let filter = { isDeleted: false };

  if (type) filter.type = type;
  if (category) filter.category = category;

  if (user.role !== "admin") {
    filter.user = user.id;
  }

  return await Finance.find(filter);
};
const updateRecord = async (id, data, user) => {
  const record = await Finance.findById(id);

  if (!record) throw new Error("Record not found");

  // Only owner or admin can update
  if (user.role !== "admin" && record.user.toString() !== user.id) {
    throw new Error("Not authorized");
  }

  return await Finance.findByIdAndUpdate(id, data, { new: true });
};
const deleteRecord = async (id, user) => {
  const record = await Finance.findById(id);

  if (!record) throw new Error("Record not found");

  if (user.role !== "admin" && record.user.toString() !== user.id) {
    throw new Error("Not authorized");
  }

  record.isDeleted = true;
  await record.save();

  return { message: "Record deleted" };
};
module.exports = { createRecord, getRecords, updateRecord, deleteRecord};