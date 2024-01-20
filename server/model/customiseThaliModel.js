import mongoose from "../connection/dbConfig.js";

var customiseThaliSchema = new mongoose.Schema({
    eventrequirmentid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'requestSchema',
        required:false
    },
    normaluserid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModal',
        required:false
    },
    location: {
        type:String,
        required:false
    },
    date: {
        type:String,
        required:false
    },
    time: {
        type:String,
        required:false
    },
    requirments :[{
        Roti: [{
            type:String,
            required:false
        }],
        Sabji: [{
            type:String,
            required:false
        }],
        Starter: [{
            type:String,
            required:false
        }],
        Dessert: [{
            type:String,
            required:false
        }],
    }],
    addtionalmenu: {
        type:String,
        required:false
    },
});

export default mongoose.model('customiseThaliSchema', customiseThaliSchema, 'customiseThaliSchema');
