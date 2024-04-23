const router = require('express').Router();
const Wc = require('../components/Wc');

router.get('/', (req, res) => {
  // res.send('papa loh');
  res.renderComponent(Wc, { title: 'wc' });
});

module.exports = router;
