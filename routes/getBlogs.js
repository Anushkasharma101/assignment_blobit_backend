const express = require('express');
const router = express.Router();
const Blog = require('../models/blogSchema'); // Ensure this path is correct

router.get('/blogs', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
        const limit = 10; // Default to 10 items per page if not provided
        const skip = (page - 1) * limit;
    
        const blogs = await Blog.find().skip(skip).limit(limit);
        const totalBlogs = await Blog.countDocuments(); // Get total number of blogs
        const totalPages = Math.ceil(totalBlogs / limit); // Calculate total pages
    
        res.json({
          totalBlogs,
          totalPages,
          currentPage: page,
          blogs
        });
      } catch (err) {
        res.status(500).json({ error: 'Failed to fetch blogs' });
      }
});

module.exports = router;
