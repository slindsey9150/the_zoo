const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

router.get('/', (req, res) => {
    axios.get('https://cataas.com/cat')
    .then((response) => {
        res.send(response.data);
    })
    .catch(error => {
        console.log("error getting cataas", error);
    })
  });

  module.exports = router;