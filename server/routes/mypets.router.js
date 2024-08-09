const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const queryText = `
    INSERT INTO "pets" (pet, owner)
    VALUES('jezza belle', 'stevie');
    `
    pool.query(queryText)
    .then((result) => res.sendStatus(200))
    .catch((err)=> {
        console.log("error inserting pet to db", err);
        res.sendStatus(500)
        
    })
    // POST route code here
  });

  module.exports = router;