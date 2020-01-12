const path = require("path");
module.exports ={
    profile(req,res){
        res.sendFile(path.join(__dirname,"../../src/html/profile.html"))
    },
    login(req,res){
        res.sendFile(path.join(__dirname,"../../src/html/login.html"))
    }
}