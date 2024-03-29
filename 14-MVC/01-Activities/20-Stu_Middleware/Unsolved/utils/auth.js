const withAuth = (req, res, next) => {
  // TODO: If the user is not logged in, redirect the user to the login page
  if(!req.session.loggedIn) {
    res.redirect('/');
    return;
  } 

  try {
    // If the user is logged in, allow them to view the paintings
    const dbPaintingData =  Painting.findByPk(req.params.id);
    if (!dbPaintingData) {
      res.status(404).json({ message: 'Painting not found' });
      return;
    }

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // TODO: If the user is logged in, allow them to view the paintings
};

module.exports = withAuth;
