import mongoose from "../connection/dbConfig.js"
var djSchema = new mongoose.Schema({
    DjEmail: {
        type: String,
        required: true,
        unique: true
    },
    Businessname: {
        type: String,
        required: true
    },
    EquipmentType: {
        type: String,
        required: true
    },
    Djprice: {
        type: Number,
        required: true
    },
    ServiceType: {
        type: String,
        default: "Dj"
    },
    docs:{
        type:String,
        required:true
    }
});

export default mongoose.model('DjModel', djSchema, "Dj");
