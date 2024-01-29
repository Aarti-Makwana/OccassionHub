import mongoose from "mongoose";

var userBookVenue = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    venueEmail: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    venuehours: {
        type: Number,
        required: true
    },
});

export default mongoose.model("userBookVenue", userBookVenue, "userBookVenue");