const express = require('express');
const routes = require('./routes');
const newsRoute = require('./routes/news');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

let app = express();
const PORT = process.env.PORT || 5000;



const MONG_URI =  process.env.MONGO_URI;

mongoose.connect(MONG_URI, function(err){
  if(err){
    console.log('Error connecting to: '+ MONG_URI)
  }
  else{
    console.log('Connected to: '+ MONG_URI)
  }
})



app.use(cors());
app.options('*', cors());

app.use('/', routes);
app.use('/news', newsRoute);

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});
