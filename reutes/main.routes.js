const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('papa loh');
});

module.exports = router;
