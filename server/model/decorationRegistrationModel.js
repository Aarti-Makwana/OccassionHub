import mongoose from "../connection/dbConfig"
var decorationSchema = new mongoose.Schema({
    DecortionEmail: {
        type: String,
        required: true,
        unique: true
    },
    Businessname: {
        type: String,
        required: true
    },
    DecorationType: {
        type: String,
        required: true
    },
    Charges: {
        type: String,
        required: true
    },
    ServiceType: {
        type: String,
        default: "Decoration"
    }
});

export default mongoose.model('DecorationModel', decorationSchema, "Decoration");