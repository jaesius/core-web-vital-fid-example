/**
 * Required External Modules
 */
const newrelic = require("newrelic");
const express = require("express");
const path = require("path");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || 3000;

/**
 *  App Configuration
 */
 app.set("view engine", "pug");
 app.set("views", path.join(__dirname, "views"));
 app.use(express.static(path.join(__dirname, "public")));

 app.locals.newrelic = newrelic;


/**
 * Routes Definitions
 */
app.get('/', (req, res) => {
    res.render("index", {title: "Home"})
})

app.get("/user", (req, res) => {
    res.render("user", { title: "Fibonacci", userProfile: { Value: 'Wow this site is really slow' } });
  });

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`)
});