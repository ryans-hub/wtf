const tips = require('express').Router();
const { readFromFile } = require('../helpers/fsUtils');
// TODO: Import helper functions and dependencies

const uuid = require('./helpers/uuid');

// TODO: GET Route for retrieving all the tips

tips.get('/', (req, res) => {
    console.info(`${req.method} request received for tips`);
    readFromFile('./db/tips.json').then((data))

})

// TODO: POST Route for a new UX/UI tip

module.exports = tips;
