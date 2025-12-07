const express = require("express");
const router = express.Router();
const TodoItem = require("../models/TodoItem");

router.post("/submittodoitem", async (req, res) => {
  try {
    const { itemName, itemDescription } = req.body;

    const newItem = new TodoItem({
      itemName,
      itemDescription,
    });

    await newItem.save();

    res.status(200).json({ message: "Item saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error saving item" });
  }
});

module.exports = router;
