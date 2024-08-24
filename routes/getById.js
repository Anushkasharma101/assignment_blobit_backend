const express = require('express');
const router = express.Router();
const Blog = require('../models/blogSchema');

// GET API - Fetch a blog by ID
router.get('/blogs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

module.exports = router;
