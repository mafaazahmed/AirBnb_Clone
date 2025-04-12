const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

const userController = require("../controllers/user.js");


router.route("/signup")
  .get( userController.renderSignUp)
  .post(wrapAsync(userController.signUp));


router.route("/login")
  .get( userController.login)
  .post( saveRedirectUrl, 
       passport.authenticate("local", {failureRedirect : '/login', failureFlash : true}), 
       wrapAsync(userController.loginUser));

router.get("/logout", userController.logOut);

module.exports = router;