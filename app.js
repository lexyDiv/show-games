/* eslint-disable no-console */
const express = require('express');
require('@babel/register');
const path = require('path');

const app = express();

const mainRoutes = require('./reutes/main.routes');
const wcRoutes = require('./reutes/wc.routes');
const boulderRoutes = require('./reutes/boulder.routes');
const ssr = require('./middleweres/renedrComponent');

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(ssr);
app.use('/', mainRoutes);
app.use('/wc', wcRoutes);
app.use('/boulder', boulderRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
