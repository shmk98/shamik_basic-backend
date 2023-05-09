const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();

const app = express();

// Middleware Array
const middleware = [logger("dev"), cors(), express.static("public"), express.urlencoded({ extended: true }), express.json(), cookieParser()];
app.use(middleware);

app.get("/", (req, res) => {
	res.json({ a: "sdfsdf", b: "dsfd" });
});

app.get("/tasin", (req, res) => {
	res.json({ a: "Tasin", b: "Mir" });
});

app.listen(process.env.PORT, () => {
	console.log("Server running on port", process.env.PORT);
});
