const express = require('express');
const { countryRoutes } = require('./routes/countryRoutes');
const { writerRoutes } = require('./routes/writerRoutes');
const { bookRoutes } = require('./routes/bookRoutes');
const fileUpload = require('express-fileupload');
const fs = require('fs');

const { db } = require('./config/db');
const app = express();
require('dotenv').config()

db.connect();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(express.json())
app.use(fileUpload());


app.use('/api/country', countryRoutes)

app.use('/api/writer', writerRoutes)
app.use('/api/book', bookRoutes)


app.listen(3000);