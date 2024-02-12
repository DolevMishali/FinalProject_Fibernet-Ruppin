const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDatabase = require('./utils/db');
const reportsApi = require('./api/reports/reportsApi');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', reportsApi);


connectToDatabase()

app.get('/', (req, res) => {
  // Send the HTML file when the root path is accessed
  res.sendFile('index.html', { root: path.join(__dirname) });
  /*
  - res: This is the response object provided by Express. It contains methods for sending the response back to the client.
  - sendFile(): This method is used to send a file as the response. It takes the path to the file as its first argument.
  - 'index.html': This is the name of the file you want to send. In this case, it's index.html.

  - { root: path.join(__dirname) }: This is an options object that provides additional information to sendFile.
  - The root option specifies the root directory for resolving relative paths. Here's what each part of this option does:
  - path.join method is used to join the provided path segments. In this case, it's joining the current directory (__dirname) with an empty string (no additional directory), effectively specifying the current directory as the root.
  - { root: ... }: This sets the root directory for resolving the file path. When { root: path.join(__dirname) } is used, it tells sendFile to look for the file in the current directory.
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
