require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express()

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next();
});

app.use(express.json());

//routes
app.use('/api/workouts', workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Successfully connected to the mongoDB");
    app.listen(process.env.PORT, () => {
      console.log('lintening on port: ', process.env.PORT);
    })
  })
  .catch((err) => {
    console.log(err.message);
  })


