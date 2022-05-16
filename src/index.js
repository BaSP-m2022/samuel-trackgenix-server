/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
// import * as controllers from './routes/index';

const app = express();
const port = process.env.PORT || 3000;
// eslint-disable-next-line max-len
const MONGO_URL = 'mongodb+srv://radiumRocket:8dll6U2hMKSETFAK@trackgenix.0a7hs.mongodb.net/Trackgenix?retryWrites=true&w=majority';

app.use(express.json());

// app.use('/', controllers);

mongoose.connect(
  MONGO_URL,
  (error) => {
    if (error) {
      console.log('Fail connection to database', error);
    } else {
      console.log('Connected to database');
      app.listen(port, () => {
        console.log(`Server ready on port ${port}`);
      });
    }
  },
);
