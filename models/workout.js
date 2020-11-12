const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String
            },

            name: {
                type: String
            },

            duration: {
                type: Number
            },

            weight: {
                type: Number
            },

            reps: {
                type: Number
            },

            sets: {
                type: Number
            },

            distance: {
                type: Number
            }
        }
    ]
}, { toJSON: { virtuals: true } });

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((num1, num2) => {
        return num1 + num2.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
