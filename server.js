const express = require("express");
const app = express();

app.use("/assets", express.static("public"));

app.get("/", (req, res) => {
    res.end("Hello World!");
})