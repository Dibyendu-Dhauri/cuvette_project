
const mongoose = require("mongoose")

const weeklistSchema = mongoose.Schema({
    tasksList: [
        {
        task: {
            type: String,
        },
        mark:{
            type: Boolean,
            default: false
        }
        }
    ],
    finishTime:{
        type: String,
    }
},{timestamps: true})

const Weeklist = mongoose.model("weeklist",weeklistSchema)

module.exports = Weeklist