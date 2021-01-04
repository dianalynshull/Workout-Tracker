const express = require('express');
const router = express.Router();
const { Workout } = require('../models');

// /workouts GET 
router.get('/', async (req, res) => {
    try {
        const result = await Workout.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

// /workouts POST
router.post('/', async (req, res) => {
    try {
        const result = await Workout.create(req.body);
        res.json(result);
    } catch(err) {
        res.json(err);
    }
});

// /workouts/range GET

//  /workouts/(workout)

module.exports = router;
