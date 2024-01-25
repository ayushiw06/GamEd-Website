import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const ProfileModel = new Schema({
    username : { type : String },
    password : {type:String},
    userEmail:{type:String, default:"user123@domain.com"},
    profileimgLink:{type:String, default:'https://i.pinimg.com/564x/93/cd/78/93cd78fa2a6fe7a0f1105480ecc4f2df.jpg'},
    totalpointsEarned : { type : Number, default : 0},
    quizesTaken:{type:Number,default:0},
    challengesWon:{type:Number,default:0},
    courseCompleted:{type:Number,default:0},
    linkedinlink:{type:String, default:'google.com'}
})

export default mongoose.model('Profile', ProfileModel);