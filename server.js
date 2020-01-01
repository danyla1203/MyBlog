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
let adminTest = {
    name: "daniil",
    password: "root"
}

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

app.get("/admin/check", (req, res) => {
    let name = req.query.name;
    let pass = req.query.password;
    console.log(req.query);

    if(name == adminTest.name && pass == adminTest.password) {
        res.end(JSON.stringify(adminTest));
    } else {
        res.end("{}");
    }
})

app.all("*", (req, res) => {
    fs.readFile("public/index.html", "utf8", (err, file) => {
        if(err) throw err;

        res.send(file);
    });
})

app.listen(3000);