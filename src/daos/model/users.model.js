import mongoose from "mongoose";

const colleccion='users'

const schema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true},
    password:{type:String, required:true}
})

export const UsersModel=mongoose.model(colleccion,schema)