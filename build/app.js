"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var port = 4000;
var app = express();
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:".concat(port));
});
