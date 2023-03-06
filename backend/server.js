const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const taskRouter = require('./src/routes/task');
require('./db/conn');

app.use(express.json());
app.use('/tasks', taskRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});