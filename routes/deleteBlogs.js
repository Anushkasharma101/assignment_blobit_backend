const express = require('express');
const router = express.Router();
const Blog = require('../models/blogSchema');

// DELETE API - Delete a blog by ID
router.delete('/blogs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json({ message: 'Blog deleted successfully', deletedBlog });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

module.exports = router;
