
const User = require("../models/user.js");


module.exports.renderSignUp = (req,res) => {
    res.render("users/signup.ejs");
};

module.exports.signUp = async(req,res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({username, email});
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, ((err) => {
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        } ))
        console.log(registeredUser);
       
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
   
};

module.exports.login = (req,res) => {
    res.render("users/login.ejs");
};

module.exports.loginUser = async (req, res) => {
    req.flash("success", "Welcome back to Wanderlust");
    if(res.locals.redirectUrl){
     res.redirect(res.locals.redirectUrl);
    }else{
     res.redirect("/listings");
    } 
 };
 

 module.exports.logOut =  (req,res, next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/");
    })
};