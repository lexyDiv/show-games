const router = require('express').Router();
const Boulder = require('../components/Boulder');
const Wc = require('../components/Wc');
const Main = require('../components/Main');

router.get('/', (req, res) => {
  res.renderComponent(Wc, { title: 'wc' });

});

module.exports = router;