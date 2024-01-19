import mongoose from "../connection/dbConfig.js";

var userSchema =  new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type :String,
        require: true,
        unique: true 
        
    },
    password:{
        type:String,
        required:true
    },
    contect :{
        type :Number,
        require : true
    },
    address : {
        type :String,
        require : true
    },
    role:{
        type :String,
        require : false,
        default:"user"
    }
});

export default mongoose.model('userModel',userSchema,'user');
