const express   = require('express');
const router = express.Router();

//get a list of dates from database
router.get('/date', (req, res) => {
    res.send({type:'GET'});
});

//add new date to database
router.post('/date', (req, res) => {
    console.log(req.body);
    res.send({
        type:'POST',
        date: req.body.date,
        location: req.body.location
    });
});

//update a date in database
router.put('/date/:id', (req, res) => {
    res.send({type:'PUT'});
});

//delete a date from the database
router.delete('/date/:id', (req, res) => {
    res.send({type:'DELETE'});
});

module.exports = router;