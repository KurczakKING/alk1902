const express = require("express");

const app = express();
const port = 3000;

app.get("/", function (req, res){
    res.send("<h1>Strona główna</h1")
})

app.get("/about", function (req, res){
    res.send("<h1>Strona o mnie</h1")
})

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});