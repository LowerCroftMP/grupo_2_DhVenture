const{loadData}=require("../../database")
module.exports=(req,res)=>{
    const user=req.session.userLogin
    res.render("users/profileUser",{user})

}
