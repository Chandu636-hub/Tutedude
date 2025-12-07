const mongoose = require("mongoose");

const TodoItemSchema = new mongoose.Schema({
  itemName: String,
  itemDescription: String,
});

module.exports = mongoose.model("TodoItem", TodoItemSchema);
