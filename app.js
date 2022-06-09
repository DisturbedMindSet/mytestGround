const express = require("express");
const app = express();
const hbs = require("hbs");

const port = process.env.PORT || 4000;

// const http = require("http");
// const server = http.server(app);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
	res.render("index");
	console.log(__dirname);
});

app.listen(port);
console.log(`listing to port: ${port}`);
