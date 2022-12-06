const express = require('express');
const { Users } = require('./models');
const basicAuth = require('./middleware/basicAuth');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
      const record = await Users.create(req.body);
      console.log(record);
      res.status(200).json({user: record});
    } catch (e) {
      res.status(403).send('Error Creating User');
    }
  })

router.post('/signin', basicAuth, (req, res) => {});

module.exports = router;