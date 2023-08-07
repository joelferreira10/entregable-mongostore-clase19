import userModelDao from "../daos/user.dao.js";
import { UsersModel } from "../daos/model/users.model.js";
const userDao=new userModelDao();

export const registerUser=async(req,res)=>{
    try {
        const newUser=await userDao.registerUser(req.body)
        console.log(newUser);
        if(newUser)res.redirect('/')
        else res.redirect('/error-register')
    } catch (error) {
        console.log(error);
    }
}
export const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const userExists=await UsersModel.findOne({email,password})
        console.log("user existe:",userExists);
        //console.log(email,password);
        
        if(email==='adminCoder@coder.com' && password==='asminCod3r123'){
            const userAdmin={
                email,
                rol:"admin",
                first_name:"coderHouse"
            }
            req.session.email=email;
            req.session.password=password;
           return res.render('products',userAdmin)
        }
        const user=await userDao.loginUser(email,password)
       
        if(user){
            userExists.rol="user"
            req.session.email=email;
            req.session.password=password;
            const user=userExists
            res.render('products',user)
        }else res.redirect('/') 
    } catch (error) {
        console.log(error);
    }
}

export const logout=(req,res)=>{
    req.session.destroy(err=>{
        if(!err)res.render('login')
        else res.redirect('/login-error')
    })
}




