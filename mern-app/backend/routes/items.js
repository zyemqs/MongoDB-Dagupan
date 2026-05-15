const router = require('express').Router();
const Item = require('../models/Item');

// =====================================
// GET ALL ITEMS
// =====================================
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();

    res.status(200).json(items);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server Error'
    });
  }
});

// =====================================
// GET ITEM BY ID
// =====================================
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: 'Item not found'
      });
    }

    res.status(200).json(item);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server Error'
    });
  }
});


// =====================================
// CREATE ITEM
// =====================================
router.post('/add', async (req, res) => {
  try {
    const { name, description } = req.body;

    // Validation
    if (!name || name.trim() === '') {
      return res.status(400).json({
        message: 'Item name is required'
      });
    }

    const newItem = new Item({
      name,
      description
    });

    const savedItem = await newItem.save();

    res.status(201).json({
      message: 'Item created successfully',
      item: savedItem
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server Error'
    });
  }
});

// =====================================
// UPDATE ITEM
// =====================================
router.put('/update/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {
        new: true
      }
    );

    if (!updatedItem) {
      return res.status(404).json({
        message: 'Item not found'
      });
    }

    res.status(200).json({
      message: 'Item updated successfully',
      item: updatedItem
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server Error'
    });
  }
});

// =====================================
// DELETE ITEM
// =====================================
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({
        message: 'Item not found'
      });
    }

    res.status(200).json({
      message: 'Item deleted successfully'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server Error'
    });
  }
});

module.exports = router;