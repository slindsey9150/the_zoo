const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')


router.get('/', (req, res) => {
    axios.get('https://meowfacts.herokuapp.com/')
    .then((response) => {
        res.send(response.data);
    })
    .catch(error => {
        console.log("error getting meowfact", error);
    })
  });

  module.exports = router;