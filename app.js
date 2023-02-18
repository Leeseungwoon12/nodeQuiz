const express = require('express');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

const app = express();
const port = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Start listen Server: ${port}`);
});

module.exports = app;
