const router = require("express").Router();
const { Workout } = require("../models/index.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", ({ body }, res) => {
  Workout.find(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  // console.log("body", body);
  // console.log("Params.id", params.id);
  Workout.findByIdAndUpdate(params.id, { $push:{ exercises: body }}, {new: true},
  (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  })
});


router.get("/api/workouts/range", ({ body }, res) => {
Workout.aggregate([ 
  {
    $addFields: {
      totalWeight: { $sum: "$exercises.weight" } ,
      totalDuration: { $sum: "$exercises.duration" }
    }
  }
  ,
  { $sort: { day: -1 } },
  { $limit: 7 }
  ])
  .then(data => {
    res.json(data)
  }) 
  .catch(err => {
    res.json(err)
  })
});

module.exports = router;
