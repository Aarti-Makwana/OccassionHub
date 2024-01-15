import mongoose from "mongoose";
var contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    Massage : {
        type : String,
        required :true
    }
});
export default mongoose.model("contectModel",contactSchema,"contactData");