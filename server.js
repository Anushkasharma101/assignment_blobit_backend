const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

const PORT = 8080;

mongoose.connect('mongodb+srv://as0846403:8dcmRgx8rQxzFlOb@cluster0.ieqxa.mongodb.net/blogs-db?retryWrites=true&w=majority', {});

app.use(express.json());
const getBlogs = require('./routes/getBlogs');
const getByIdBlogs  = require('./routes/getById');
const postBlogs = require('./routes/postBlogs');
const deleteBlogs  = require('./routes/deleteBlogs');
const putBlogs  = require('./routes/putBlogs');


app.use('/api', postBlogs);
app.use('/api', getByIdBlogs);
app.use('/api', getBlogs);
app.use('/api', putBlogs);
app.use('/api', deleteBlogs);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
