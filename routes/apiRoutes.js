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
router.get('/range', async (req, res) => {
    try {
        const result = await Workout.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

//  /workouts/:id
router.put('/:id', async (req, res) => {
    try {
        let savedWorkouts = [];
        const previousWorkout = await Workout.findById(req.params.id);
        savedWorkouts = previousWorkout.exercises;
        let allExercises = [...savedWorkouts, req.body];
        res.json(allExercises);
        await Workout.findByIdAndUpdate(req.params.id, { exercises: allExercises });
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;
