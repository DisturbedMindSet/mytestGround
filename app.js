const express = require("express");

const app = express();

const port = process.env.port || 4000;

app.get("/", (req, res) => {
	res.sendFile("/index.html", { root: __dirname });
	console.log(__dirname);
});

app.listen(port);
console.log(`listing to port: ${port}`);
