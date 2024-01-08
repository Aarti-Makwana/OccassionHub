import mongoose from "../connection/dbConfig.js";

var catererSchema = new mongoose.Schema({
    catererEmail: {
        type: String,
        required: true,
        unique: true
    },
    Businessname: {
        type: String,
        required: true
    },
    Specialization: {
        type: String,
        required: true
    },
    ServiceCharges: {
        type: Number,
        required: true
    },
    FoodType: {
        type: String,
        required: true
    },
    ServiceType: {
        type: String,
        default: "caterer"
    }
});

export default mongoose.model('catererModel', catererSchema, "Caterer");
