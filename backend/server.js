const whitelist = ['http://localhost:3000']
const corsOptions = {
 origin: function (origin, callback) {
    if(!origin) {//for bypassing postman req with  no origin
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const taskRouter = require('./src/routes/task');
require('./db/conn');

app.use(cors(corsOptions));
app.use(express.json());
app.use('/tasks', taskRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});