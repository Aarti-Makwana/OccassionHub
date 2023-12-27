import mongoose from "../connection/dbConfig.js";

var customiseThaliSchema = new mongoose.Schema({
    eventrequirment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'requestSchema'
    },
    starter: [{
        type:String,
        required:false
    }],
    sweets: [{
        type:String,
        required:false
    }],
    drinks: [{
        type:String,
        required:false
    }],
    addtionalmenu: [{
        type:String,
        required:false
    }],
});

export default mongoose.Model('customiseThaliSchema', customiseThaliSchema, 'customiseThaliSchema');