const express = require("express"); // Express framework
const loggedIn = require("../controllers/loggedin") // Import a middleware (function) used to check if a user is logged in before allowing access to certain routes.
const router = express.Router(); // Creates a short instance of Express router used to handle just a particular part of the application.
const logout = require("../controllers/logout") // Import a function responsible for handling logout funcionality.

// Rendering the home page.
router.get("/", loggedIn, (req, res) => {
    //  Check if the user is logged in.
    if(req.user) {
        // With user information.
        res.render("index", {status: "loggedIn", user: req.user})
    } else {
        // Without user information.
        res.render("index", {status: "no", user: "nothing"})
    }
})

// Rendering the registration page.
router.get("/register", (req, res) => {
    res.sendFile("register.html", {root:"./public"})
});

// Rendering the login page.
router.get("/login", (req, res) => {
    res.sendFile("login.html", {root:"./public"})
})

// Route for handling logout.
router.get("/logout", logout );

// Exports the router module to handle HTTP requests.
module.exports = router;
