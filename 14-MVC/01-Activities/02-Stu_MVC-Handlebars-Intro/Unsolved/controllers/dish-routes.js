// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// This is a controller, determines the base route
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// when this goes to the main page, it shows everything (when on route folder, show us the all.handlebars stuff)
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
// grabs the all.handlebars
  res.render('all');
});

module.exports = router;
