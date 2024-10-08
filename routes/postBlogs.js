const express = require('express');
const router = express.Router();
const Blog = require('../models/blogSchema');

router.post('/blogs', async (req, res) => {
    const { Heading, coverImg, blogDetail } = req.body;

  // Basic validation


  const newBlog = new Blog({
    Heading,
    coverImg,
    blogDetail
  });

  try {
    const savedBlog = await newBlog.save();
    console.log(savedBlog);
    res.status(201).json(savedBlog);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err});
  }
});

module.exports = router;
