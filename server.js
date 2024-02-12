const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDatabase = require('./utils/db');
const reportsApi = require('./api/reports/reportsApi');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', reportsApi);


connectToDatabase()


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
