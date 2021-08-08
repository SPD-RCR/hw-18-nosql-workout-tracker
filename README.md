# hw-18-nosql-workout-tracker
Create a workout tracker. This assignment will require you to create Mongo database with a Mongoose schema and handle routes with Express.

## PsuedoCode

for each workout (sum weight for each exercise) = workoutTotalWeight

workoutTotalWeight = sum workout(exercise.map(_id, exercise.weight))

sum 7 most recent workoutTotalWeight

db.getCollection('workouts').findByDay(currentDay, 7,descending)

MongoDB
db.workouts.aggregate( [
  {
    $addFields: {
      totalWeight: { $sum: "$exercises.weight" } ,
      totalDuration: { $sum: "$exercises.duration" }
    }
  }
])

MongooseJS
aggregate.addFields({
  totalWeight: ''
})

db.workouts.aggregate.addFields({ totalWeight: { $sum: "$exercises.weight" } ,totalDuration: { $sum: "$exercises.duration" } });