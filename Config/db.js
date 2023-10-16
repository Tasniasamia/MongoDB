const mongoose = require('mongoose');

const { DB } = require('./Config');

mongoose.connect("mongodb://127.0.0.1:27017/MyNewDatabase")
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((error) => console.log("error is ",error.message));
