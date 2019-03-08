const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('now then');
});

module.exports = router;
