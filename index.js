// Starting, we are importing some required modules.
const express = require("express"); // Import Express framework.
const db = require("./routes/db-config"); // Import database config.
const cookie = require("cookie-parser"); // Import Cookie Parser middleware - This will be used to interpret browser data that is sent to the server. we will use this to do login and session control.

// Initializing Express app - Handle http requests, request and response.
const app = express();

// Setting up port.
const PORT = process.env.PORT || 5000;

// Serving static files (JS and CSS) from the 'public' directory.
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));

// Setting view engine and views directory for EJS templates.
app.set("view engine", "ejs"); // The "view engine" command will indicate which tool we are going to use to work on visualizing the project models.
app.set("views", "./views"); // The "views" command will indicate where are this tool.

// Using cookie-parser middleware to parse cookies from the request headers.
app.use(cookie());

// Parsing JSON request bodies.
app.use(express.json()); // will enable express to interpret data in json format, transforming it into objects for javascript.

// Connecting to the database.
db.connect((err) => {
  if (err) throw err;
  console.log("database connected");
});

//  Route handling.
app.use("/", require("./routes/pages")); // Directs all requests to be handled in pages.js.
app.use("/api", require("./controllers/auth")); // Directs all requests from the "api" route to be handled in auth.js

// Start listening on the specified port.
app.listen(PORT);
