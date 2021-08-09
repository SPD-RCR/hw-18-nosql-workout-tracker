# hw-18-nosql-workout-tracker
Create a workout tracker. This assignment will require you to create Mongo database with a Mongoose schema and handle routes with Express.

## PsuedoCode

for each workout (sum weight for each exercise) = workoutTotalWeight

workoutTotalWeight = sum workout(exercise.map(_id, exercise.weight))

sum 7 most recent workoutTotalWeight

db.getCollection('workouts').sort(Day: desc, limit: 7)

MongoDB
db.workouts.aggregate( [
  {
    $addFields: {
      totalWeight: { $sum: "$exercises.weight" } ,
      totalDuration: { $sum: "$exercises.duration" }
    }
  },
  { $sort: { day: -1 } },
  { $limit: 7 }
])

MongooseJS
aggregate.addFields({
  totalWeight: ''
})

db.workouts.aggregate.addFields({ totalWeight: { $sum: "$exercises.weight" } ,totalDuration: { $sum: "$exercises.duration" } });