const express = require('express');
const router = express.Router();
const Blog = require('../models/blogSchema');

// PUT API - Update a blog by ID
router.put('/blogs/:id', async (req, res) => {
  const { id } = req.params;
  const { Heading, coverImg, blogDetail } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { Heading, coverImg, blogDetail },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json({ message: 'Blog updated successfully', updatedBlog });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
});

module.exports = router;
