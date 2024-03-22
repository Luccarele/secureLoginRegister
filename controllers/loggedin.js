const db = require("../routes/db-config")
const jwt = require("jsonwebtoken");
const loggedIn = (req, res, next) => {
   if (!req.cookies.userRegistered) return next();
    try {
        const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
        db.query('SELECT * FROM users WHERE user_id = ?', [decoded.id], (err, result) => {
            if (err) return next();
            req.user = result[0];
            // console.log(req.user)
            return next();
        })
    } catch (err) {
        if(err) return next();
    }
}
module.exports = loggedIn;