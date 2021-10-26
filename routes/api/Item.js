const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//import item Model
const Item = require("../../models/ItemModel");

//route Get  api/items
router.get("/", async (req, res) => {
  try {
    const item = await Item.find().sort({ date: -1 });
    res.json(item);
  } catch (error) {
    res.json(error);
  }
});

//route Post api/items
router.post("/", auth, async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.json(error);
  }
});

//route Delete api/items/:id
router.delete("/:id", auth, async (req, res) => {
  try {
    const deleteItem = await Item.remove({ _id: req.params.id });
    res.json({ successs: "item deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: "item not found" });
  }
});

module.exports = router;