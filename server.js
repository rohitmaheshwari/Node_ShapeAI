const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log(req.body);
    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    console.log(n1, n2);
    var result = n1/(n2*n2);
    res.send("" + result);
});

app.listen(8000, function() {
    console.log("app started on port 8000");
});