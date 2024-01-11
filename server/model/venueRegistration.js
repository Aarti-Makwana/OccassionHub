import mongoose from "../connection/dbConfig.js";

var venueSchema = new mongoose.Schema({
    venueEmail: {
        type: String,
        required: true,
        unique: true
    },
    VenueName: {
        type: String,
        required: true
    },
    venueLocation: {
        type: String,
        required: true
    },
    venuePrice: {
        type: Number,
        required: true
    },
    VenueType: {
        type: String,
        required: true
    },
    ServiceType: {
        type: String,
        default: "venue"
    },
    docs:{
        type:String,
        required:true
    }
});

export default mongoose.model('veneueModel', venueSchema, "Venue");
