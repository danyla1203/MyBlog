const fs = require("fs");
const express = require("express");
const app = express();

app.use("/assets", express.static("public"));

let testArticles = [
    {id: 0, title: "Hello World!", text: "I've done my work"},
    {id: 1, title: "Hello World!", text: "I've done my work"},
    {id: 2, title: "Hello World!", text: "I've done my work"},
    {id: 3, title: "Hello World!", text: "I've done my work"},
    {id: 4, title: "Hello World!", text: "I've done my work"},
];

app.get("/data/articles", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    let articles = JSON.stringify(testArticles);
    res.end(articles)
})

app.get("/data/articles/*", (req, res) => {
    let id = req.url.split("/")[3];

    res.setHeader("Content-Type", "application/json");
    
    for(let i = 0; i < testArticles.length; i++) {
        if(testArticles[i].id == id) {
            
            res.end(JSON.stringify(testArticles[i]));
        }
        
    }
})

app.get("*", (req, res) => {
    fs.readFile("public/index.html", "utf8", (err, file) => {
        if(err) throw err;

        res.send(file);
    });
})

app.listen(3000);