import mongoose from "../connection/dbConfig.js"
var decorationSchema = new mongoose.Schema({
    DecorationEmail: {
        type: String,
        required: true,
        unique: true
    },
    Businessname: {
        type: String,
        required: true
    },
    Decorationtype: {
        type: String,
        required: true
    },
    Decorationprice: {
        type: Number,
        required: true
    },
    ServiceType: {
        type: String,
        default: "Decoration"
    },
    docs: {
        type: String,
        required: true
    }
});

export default mongoose.model('DecorationModel', decorationSchema, "Decoration");
