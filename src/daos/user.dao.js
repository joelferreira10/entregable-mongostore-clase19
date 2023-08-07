import { UsersModel } from "./model/users.model.js";


export default class userModelDao{
    async registerUser(user){
     try {
        const {email}=user;
        const userExist=await UsersModel.findOne({email})
        if(!userExist){
            const newUser=await UsersModel.create(user)
            return newUser;
        }else return false;
     } catch (error) {
        console.log(error);
     }       

    }
    async loginUser(email,password){
     try {
        
        const userExist=await UsersModel.findOne({email,password})
        if(userExist){
         
         return userExist;
      }
        else return false;
     } catch (error) {
        console.log(error);
     }   
    }
}