const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workout/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { useFindAndModify: false }).then((dbWorkout) => {
    res.json(dbWorkout);
  }).catch((err) => {
    res.json(err);
  });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).sort({ day: -1 }).limit(7).then(dbWorkout => {
    res.json(dbWorkout)
  }).catch((err) => {
    res.json(err);
  });
});
module.exports = router;
