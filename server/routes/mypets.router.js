const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated
  } = require('../modules/authentication-middleware');

router.post('/', (req, res) => {
    const petOwner = req.user.id
    const petName = req.body.pet
    const petNotes = req.body.notes

    const queryText = `
    INSERT INTO "pets" (pet, owner, notes)
    VALUES($1, $2, $3);
    `
    const queryParams = [petName, petOwner, petNotes]
    pool.query(queryText, queryParams)
    .then((result) => {
        res.sendStatus(200)
        // console.log("req.user", req.user, petOwner);
        // console.log("req.body", req.body);
        
        })
    .catch((err)=> {
        console.log("error inserting pet to db", err);
        res.sendStatus(500)
        
    })
    // POST route code here
  });

  router.get('/', (req, res) => {
    // GET route code here
    const userID = req.user.id
    const queryText = `
    SELECT * FROM pets WHERE pets.owner = $1;
    `
    pool.query(queryText, [userID])
    .then((results) => {
        res.send(results.rows)
        console.log("req.user", req.user.id);
        
    })
    .catch((error) => {
        console.log("error fetching pets", error);
        res.sendStatus(500)
    })


  });

  module.exports = router;