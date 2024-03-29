const router = require('express').Router();
const {User} = require('../models/User');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  const users = await User.findAll();
  const newUser = users.map((user) =>
  user.get({
    plain: true
  }))

  res.render('homepage', {
    newUser
  });

});

module.exports = router;
