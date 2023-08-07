
export const register=async(req,res)=>{
    try {
        res.render('register')
    } catch (error) {
        console.log(error);
    }
}
export const errorRegister=async(req,res)=>{
    try {
        res.render('errorRegister')
    } catch (error) {
        console.log(error);
    }
}
export const login=async(req,res)=>{
   try {
    res.render('login')
   } catch (error) {
    
   }

}
export const loginError=async(req,res)=>{
    try {
     res.render('/login-error')
    } catch (error) {
     
    }
 
 }
 export const products=async(req,res)=>{
    try {
     res.render('products')
    } catch (error) {
     
    }
 
 }
export const visit=(req,res)=>{
    req.session.info.count++;
    res.send(`cantidad de visitas ${req.session.info.count}`)
}



export const infoSession=(req,res)=>{
    res.json({
        session:req.session,
        sessionID:req.sessionID,
        cookies:req.cookies
    })
}
