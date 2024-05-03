const router = require('express').Router();
const Boulder = require('../components/Boulder');
const Wc = require('../components/Wc');

router.get('/', (req, res) => {
  res.renderComponent(Boulder, { title: 'Boulder Dash' });
});

module.exports = router;
