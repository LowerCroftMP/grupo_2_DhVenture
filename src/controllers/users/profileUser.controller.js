const{readData}=require("../../data")
module.exports=(req,res)=>{
    const user=req.session.userLogin
    res.render("users/profileUser",{user})

}
