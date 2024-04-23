/* eslint-disable no-console */
const express = require('express');

const app = express();

const mainRoutes = require('./reutes/main.routes');

app.use('/', mainRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
